chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "run") {
        format();
    }
});

function format() {
    [
      "header",
      "pagehead",
      "gh-header-actions",
      "wiki-rightbar",
      "site-footer",
      "wiki-footer",
      "gh-header-meta"
    ].forEach(function (className) {
      document.getElementsByClassName(className)[0].style.display = 'none';
    });
    document.getElementsByClassName("has-rightbar")[0].classList.remove("has-rightbar")
    var codeTags = Array.from(document.getElementsByClassName("markdown-body")[0].getElementsByTagName("code"));
    codeTags.forEach(function (e) {
      e.style["word-wrap"] = "break-word";
      e.style["white-space"] = "pre-wrap";
    });
}
