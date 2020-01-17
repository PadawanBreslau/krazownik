import _ from 'lodash';

export function camelize(obj) {
  return recurentTransform(obj, _.camelCase);
}

export function snakize(obj) {
  return recurentTransform(obj, _.snakeCase);
}

export function regularCase(string) {
  return _.capitalize(_.lowerCase(string));
}

function recurentTransform(obj, transformer) {
  if (_.isArray(obj)) {
    return _.map(obj, (value) => recurentTransform(value, transformer));
  }

  if (_.isObject(obj)) {
    return _.transform(
      obj,
      (result, value, key) => {
        result[transformer(key)] = recurentTransform(value, transformer); // eslint-disable-line no-param-reassign
      },
      {},
    );
  }

  return obj;
}
