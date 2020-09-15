/*For Five Year Plan*/
function showDrop(element) {
    var dropId = element.alt;
    document.getElementById(dropId).className = "dropon";
}
function hideDrop(element) {
    var dropId = element.alt;
    document.getElementById(dropId).className = "dropoff";
}
function hideThis(element){
    element.style.display = "none";
}
function showThis(element){
    element.style.display = "inline-block";
}