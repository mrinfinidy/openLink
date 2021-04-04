document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("open").addEventListener("click", function() {
        var div = document.getElementById("navigation") //choose div, make this customizable later
        openLinks(div);
    });
});

//open all links in given div
function openLinks(div) {
    //get all links
    links = div.getElementByTagName("a");
    for (var i = 0; i < links; i++) {
        window.open(links[i], "_blank");
    }
}
