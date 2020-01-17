const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const randomstring = require('randomstring');

const config = {
  accessKeyId: process.env.BUILD_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.BUILD_AWS_SECRET_ACCESS_KEY,
  region: process.env.BUILD_AWS_REGION,
  s3BucketName: process.env.BUILD_S3_BUCKET_NAME,
  folderPath: './build',
  cloudfrontDistributionId: process.env.BUILD_CLOUDFRONT_DISTRIBUTION_ID,
};

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region,
});

const s3 = new AWS.S3({ signatureVersion: 'v4' });

if (config.cloudfrontDistributionId && config.s3BucketName) {
  const distFolderPath = path.join(__dirname, config.folderPath);

  fs.readdir(distFolderPath, (err, files) => {
    if (!files || files.length === 0) {
      console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
      console.log('Make sure your project was compiled!');
      return;
    }

    files.forEach((fileName) => {
      const filePath = path.join(distFolderPath, fileName);

      if (fs.lstatSync(filePath).isDirectory()) return;

      fs.readFile(filePath, (error, fileContent) => {
        if (error) {
          throw error;
        }
        putToS3(fileName, fileContent);
      });
    });

    invalidateCloudfront();
  });
}

function putToS3(fileName, fileContent) {
  s3.putObject(
    {
      Bucket: config.s3BucketName,
      Key: fileName,
      Body: fileContent,
      ACL: 'public-read',
      ContentType: getContentTypeByFile(fileName),
    },
    (res) => {
      console.log(res);
      console.log(`Successfully uploaded '${fileName}'!`);
    },
  );
}

function invalidateCloudfront() {
  const cloudfront = new AWS.CloudFront();

  cloudfront.createInvalidation(
    {
      DistributionId: config.cloudfrontDistributionId,
      InvalidationBatch: {
        CallerReference: randomstring.generate(16),
        Paths: {
          Quantity: 1,
          Items: ['/*'],
        },
      },
    },
    (error, data) => {
      if (error) console.log(error, error.stack);
      else console.log(data);
    },
  );
}

function getContentTypeByFile(fileName) {
  const fn = fileName.toLowerCase();

  if (fn.indexOf('.html') >= 0) return 'text/html';
  if (fn.indexOf('.css') >= 0) return 'text/css';
  if (fn.indexOf('.json') >= 0) return 'application/json';
  if (fn.indexOf('.js') >= 0) return 'application/x-javascript';
  if (fn.indexOf('.svg') >= 0) return 'image/svg+xml';
  if (fn.indexOf('.png') >= 0) return 'image/png';
  if (fn.indexOf('.jpg') >= 0) return 'image/jpg';

  return 'application/octet-stream';
}
