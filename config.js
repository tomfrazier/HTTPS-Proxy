// Rather than parsing a JSON file, configuration for the HTTPS proxy will
// be handled in good old javascript.
// As you can see, at the most basic level, that doesn't change much.
module.exports = {
  port: 5641, // reversed(str(sum(map(ord, 'HTTPSEverywhere'))))
  address: '127.0.0.1',
  rewritePages: true, // Rewrite the URLs found in responses to HTTPS
  aggressive: false, // Rewrite the URLs in *all* responses instead of just text

  // Configuration options for requests. See
  // https://github.com/request/request#requestoptions-callback
  followRedirect: true,
  followAllRedirects: false,
  maxRedirects: 5,
  useProxy: false,
  proxy: null, // Doesn't get set if useProxy is false
  strictSSL: true,
  useTunnel: false,
  tunnel: null // Doesn't get set if useTunnel is false
};
