/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Routes from 'containers/Routes';
import { Helmet } from 'react-helmet';
import config from 'config';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet>
        {config.mouseflow && (
          <script type="text/javascript">
            {`
              window._mfq = window._mfq || [];
              (function() {
                var mf = document.createElement("script");
                mf.type = "text/javascript"; mf.async = true;
                mf.src = "//cdn.mouseflow.com/projects/${config.mouseflow}.js";
                document.getElementsByTagName("head")[0].appendChild(mf);
              })();
            `}
          </script>
        )}
      </Helmet>
      <Routes />
      <GlobalStyle />
    </div>
  );
}
