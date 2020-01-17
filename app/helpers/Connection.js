import { camelize, snakize } from 'helpers/Formatters';
import config from '../config';
import {
  getHeadersFromStorage,
  setHeadersToStorage,
  removeHeadersFromStorage,
  getDefaultHeaders,
} from './Headers';

const methods = ['get', 'post', 'put', 'delete'];

export const parseAPIResponse = (response) =>
  new Promise((resolve) => resolve(response.text()))
    .catch((err) =>
      Promise.reject({
        type: 'NetworkError',
        status: response.status,
        message: err,
      }),
    )
    .then((responseBody) => {
      try {
        const parsedJSON = JSON.parse(responseBody);
        if (response.ok) {
          setHeadersToStorage(response);
          return parsedJSON;
        }
        if (response.status === 401) {
          removeHeadersFromStorage();
        }
        if (response.status === 422) {
          setHeadersToStorage(response);
        }
        if (response.status >= 500) {
          return Promise.reject({
            type: 'ServerError',
            status: response.status,
            body: parsedJSON,
          });
        }
        return Promise.reject({
          type: 'ApplicationError',
          status: response.status,
          body: parsedJSON,
        });
      } catch (e) {
        // We should never get these unless response is mangled
        // Or API is not properly implemented
        if (response.status === 204) {
          setHeadersToStorage(response);
          return {
            data: {},
          };
        }
        return Promise.reject({
          type: 'InvalidJSON',
          status: response.status,
          body: responseBody,
        });
      }
    });

const prepareRequestOptions = (method, payload, optionsOverwrite) => {
  const requestOptions = {
    method,
    headers: {
      ...getDefaultHeaders(),
      ...getHeadersFromStorage(),
    },
  };
  if (!(method === 'get')) {
    requestOptions.body = JSON.stringify(snakize(payload));
  }
  return {
    ...requestOptions,
    ...optionsOverwrite,
  };
};

class Connection {
  constructor(apiBase) {
    this.apiBase = apiBase;
    methods.forEach((method) => {
      this[method] = (endpoint, payload = {}, optionsOverwrite = {}) => {
        const requestUrl = `${this.apiBase}${endpoint}`;
        const requestOptions = prepareRequestOptions(method, payload, optionsOverwrite);

        return fetch(requestUrl, requestOptions)
          .then((response) => parseAPIResponse(response))
          .then(
            (json) => camelize(json),
            (err) => {
              const error = new Error(err);
              const newError = {
                ...error,
                ...err,
              };
              throw newError;
            },
          );
      };
    });
  }
}

export default new Connection(`${config.api.url}/${config.api.namespace}`);
