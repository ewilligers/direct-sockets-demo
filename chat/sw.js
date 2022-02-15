'use strict';

self.addEventListener('fetch', async (event) => {
  let response = await fetch(event.request);
  let headers = new Headers(response.headers);
  headers.append('Cross-Origin-Opener-Policy', 'same-origin');
  headers.append('Cross-Origin-Embedder-Policy', 'require-corp');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers
  });
};
