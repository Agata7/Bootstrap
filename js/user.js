window.onload = function () {
    var top = document.getElementById("top");
    window.onscroll = function () {
        var pageup = window.pageYOffset;
        var top = document.getElementById("top");
        if (pageup > 300)
            top.style.display = "block";
        else
            top.style.display = "none";
    };
    top.onclick = function () {
        window.scrollBy(0, -1 * window.pageYOffset)
    };

};