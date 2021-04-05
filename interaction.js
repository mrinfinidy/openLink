document.addEventListener('DOMContentLoaded', function() {
    var openLinks = document.getElementById("open_links");
    if (openLinks) {
        openLinks.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {"message": "open_links"});
            });
        });
    }
});
