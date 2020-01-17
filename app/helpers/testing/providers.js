import React from 'react';

import { MemoryRouter, memoryHistory } from 'react-router-dom';
import configureStore from 'configureStore';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { translationMessages } from 'i18n';

export default function Providers(component) {
  const store = configureStore({}, memoryHistory);
  return (
    <IntlProvider locale="en" messages={translationMessages.en}>
      <MemoryRouter>
        <Provider store={store}>{component}</Provider>
      </MemoryRouter>
    </IntlProvider>
  );
}
