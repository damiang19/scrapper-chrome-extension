// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete" && tab.url) {
//     chrome.storage.local.set({
//       lastUrl: tab.url,
//       updatedAt: Date.now()
//     });
//   }
// });
function saveTabUrl(tab) {
  if (tab.url) {
    chrome.storage.local.set({
      lastUrl: tab.url,
      updatedAt: Date.now()
    });
  }
}

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, saveTabUrl);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    saveTabUrl(tab);
  }
});