//wait for content to load
document.addEventListener('DOMContentLoaded', function() {
    //inform content script that button on popup was clicked
    var openLinks = document.getElementById("open_links");
    if (openLinks) {
        openLinks.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {"message": "open_links"});
            });
        });
    }
});
