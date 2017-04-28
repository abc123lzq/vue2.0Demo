// 这个是一个时间戳过滤器
export const normalTime = (time) => {
    if (time) {
        var oDtae = new Date();
        oDtae.setTime(time);
        var y = oDtae.getFullYear();
        var m = oDtae.getMonth()+1;
        var d = oDtae.getDate();
        var h = oDtae.getHours();
        var mm = oDtae.getMinutes();
        var s = oDtae.getSeconds();
        return y + '-' + m + '-' + d + '-' + h + ':' + mm + ':' + s;
    }
};