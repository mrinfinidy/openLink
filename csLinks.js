//open links after message that button was clicked
chrome.runtime.onMessage.addListener(
    function(message) {
        openLinks();
    }
);

function openLinks() {
    var links = document.getElementById('gallery').getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        window.open(links[i].href, "_blank");
    }
}

/*
var image = "SomeURL".getElementsByTagName('img');
window.open(image.src, "_blank");
*/
