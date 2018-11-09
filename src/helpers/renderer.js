import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  const reactApp = renderToString(<Home />);

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