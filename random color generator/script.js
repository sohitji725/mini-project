const bg = document.body;
const button = document.querySelector(".btn");
const colorElement = document.getElementById("color");


button.addEventListener('click',getcolor = () =>{
    //hex code
    const randomnumber = Math.floor(Math.random()*16777215).toString(16);
    const hexcode  = "#" + randomnumber.padStart(6, '0');
    colorElement.innerHTML = hexcode;
    bg.style.backgroundColor = hexcode;
    
    // bg.style.backgroundColor = hexcode;
    // console.log(hexcode)
});
    


