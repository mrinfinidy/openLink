chrome.runtime.onMessage.addListener(
    function(message) {
        openLinks();
    }
);

function openLinks() {
    var links = document.getElementById('navigation').getElementsByTagName('a');
    console.log(links.length);
    for (var i = 0; i < links.length; i++) {
        console.log(links[i]);
        window.open(links[i], "_blank");
    }
}
