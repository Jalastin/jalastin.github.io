/*For Five Year Plan*/
function showDrop(element) {
    var dropId = element.alt;
    document.getElementById(dropId).className = "dropon";
}
function hideDrop(element) {
    var dropId = element.alt;
    document.getElementById(dropId).className = "dropoff";
}