chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    chrome.storage.local.set({
      lastUrl: tab.url,
      updatedAt: Date.now()
    });
  }
});