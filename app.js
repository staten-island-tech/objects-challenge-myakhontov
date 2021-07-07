/* //const header = document.querySelector(".header")
//const header = document.querySelector("#Idheader")
const header = document.getElementById("Idheader")
const items = document.querySelectorAll(".list-item")
//items.forEach((element) => console.log(element))
const itemsArr = Array.from(items)
itemsArr.forEach((el) => (el.style.backgroundColor = 
    "blue"))
 */

 const header = document.querySelector(".header-two")
 //header.classList.add("Karen")
 //header.classList.remove("Karen")
 const button = document.querySelector(".button")
 const background = document.querySelector(".background")
 /* button.addEventListener("click", function(){
     header.classList.toggle("Karen")
 }) */
 /* button.addEventListener("click", function(){
     if(background.style.backgroundColor !== "rgb(255, 0, 0)"){
         background.style.backgroundColor = "rgb(255, 0, 0)"
     } else{
         background.style.backgroundColor = "rgb(0, 0, 255)"
     }
 }) */
 
 button.addEventListener("click", function(){
    const R = Math.floor(Math.random()*256)
    const G = Math.floor(Math.random()*256)
    const B = Math.floor(Math.random()*256)
    header.textContent = `rgb(${R}, ${G}, ${B})`
    background.style.backgroundColor = `rgb(${R}, ${G},
        ${B})`
 })