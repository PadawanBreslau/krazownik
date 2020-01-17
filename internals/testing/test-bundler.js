// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value ? value.toString() : '';
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
global.fetch = require('jest-fetch-mock');
global.document.execCommand = function execCommandMock() {};
