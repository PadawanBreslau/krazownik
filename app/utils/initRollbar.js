export default function initRollbar() {
  const Rollbar = require('rollbar'); // eslint-disable-line global-require

  Rollbar.init({
    accessToken: process.env.ROLLBAR_CLIENT_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    enabled: process.env.NODE_ENV === 'production',
    payload: {
      environment: 'production',
    },
  });
}
