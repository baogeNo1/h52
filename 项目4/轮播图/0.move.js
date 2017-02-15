/**
 * Created by Administrator on 2016/8/24.
 */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}
//       move(obanner,{left:123})
function move(obj,json,fn){
    clearInterval(obj.timer);
    var iCurn=0;
    obj.timer=setInterval(function(){
        var bStop=true;
        for(var x in json) {
            if (x == "opacity") {
                iCurn = parseInt(getStyle(obj, x) * 100);
            } else {
                iCurn = parseInt(getStyle(obj, x));
            }
            var iSpeed = (json[x] - iCurn) / 10;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (iCurn != json[x]) {
                bStop=false;
                if (x == "opacity") {
                    obj.style.opacity = (iCurn + iSpeed) / 100;
                } else {
                    obj.style[x] = iCurn + iSpeed + "px";
                }
            }
        }
        if(bStop){
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    },20)
}