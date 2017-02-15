(function(){
    //   rem   em 相对单位  基础
    function refresh() {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1080) {
            document.documentElement.style.fontSize = 1080 / 10.8 + "px";
        } else {
            //  540    50

            document.documentElement.style.fontSize = deviceWidth / 10.8 + "px";
        }
    }
    refresh();
    window.onresize = function () {
        refresh();
    }
})();
