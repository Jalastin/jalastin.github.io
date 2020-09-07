/*For Five Year Plan*/
function showDrop(harp) {
    var num = harp.alt;
    console.log(num);
    var dropId = "drop" + num;
    document.getElementById(dropId).className = "dropon";
}
function hideDrop(harp) {
    var num = harp.alt;
    var dropId = "drop" + num;
    document.getElementById(dropId).className = "dropoff";
}