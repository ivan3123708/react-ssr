import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
  const reactApp = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head></head>
      <body>
        <div id="app">${reactApp}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}