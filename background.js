chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://*.kevel.com/*","*://*.zedo.com/*"] },
  ["blocking"]
);
