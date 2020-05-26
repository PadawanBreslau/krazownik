export default {
  api: {
    url: process.env.NODE_ENV === 'production' ? process.env.API_HOST : '',
    namespace: 'api/v1',
  },
};
