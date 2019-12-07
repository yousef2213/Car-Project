
window.addEventListener("load",function(){
    document.querySelector(".loader").classList.add("hideloader");
})

document.getElementById("mercedes").onclick = function(){
    document.getElementById("img").src = "img/mercedes-1.jpeg";
}
document.getElementById("bm").onclick = function(){
    document.getElementById("img").src = "img/bmw.jpeg";
}
document.getElementById("toyota").onclick = function(){
    document.getElementById("img").src = "img/toyota.jpeg";
}

document.getElementById("jeep").onclick = function(){
    document.getElementById("img").src = "img/jeep.jpeg";
}
document.getElementById("audi").onclick = function(){
    document.getElementById("img").src = "img/featured.jpeg";
}