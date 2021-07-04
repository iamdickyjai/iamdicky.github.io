function getResult() {
    var v = document.getElementById("#sf").value;
    v = v.replace(/\s+/g, "+");
    window.location.href = "result.html?result=" + v;
}

function returnResult() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const result = urlParams.get("result");
    document.title = result + " - Google Search";
}

function getContent() {
    var content = document.getElementById("#sf").value;
    if (content != "") {
        var arr = document.getElementsByClassName("search_clear");
        for (var ele of arr) {
            ele.style.display = "initial";
        }
    }
    else {
        var arr = document.getElementsByClassName("search_clear");
        for (var ele of arr) {
            ele.style.display = "none";
        }
    }
}

function clearText() {
    document.getElementById("#sf").value = "";
    getContent();

}