const rotateX = document.getElementById("rotateX");
const rotateY = document.getElementById("rotateY");
const rotateZ = document.getElementById("rotateZ");
const mino = document.getElementById("mino")
rotateX.addEventListener("click", ()=>{
    mino.classList.toggle("active")
})
rotateY.addEventListener("click", ()=>{
    mino.classList.toggle("clicked")
})
rotateZ.addEventListener("click", ()=>{
    mino.classList.toggle("poni")
})