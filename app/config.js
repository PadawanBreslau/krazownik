export default {
  api: {
    url: process.env.NODE_ENV === 'production' ? process.env.API_HOST : '',
    namespace: 'api/v1',
  },
  intercom: process.env.INTERCOM_APP_ENV,
  mouseflow: process.env.MOUSEFLOW_APP_ID,
  pipedrive: process.env.PIPEDRIVE_URL,
  gaKey: process.env.RB_GA_KEY,
  typeform: process.env.CANDIDATE_SIGNUP_TYPEFORM_URL,
  intercomDefaultAddress: process.env.INTERCOM_DEFAULT_ADDRESS,
  gtmId: process.env.GTM_ID,
  googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  disableMessages: process.env.DISABLE_MESSAGES,
};
