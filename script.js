var element;

document.getElementById("header").addEventListener("click",abc)

function abc(){

    document.getElementById("header").classList.toggle("vadara");
}

element=document.getElementById("header").classList;

console.log(element);

element=document.getElementById("main").parentNode;

console.log(element);

element=document.getElementById("header").parentElement;

console.log(element);

element=document.getElementById("First").children;

console.log(element);

element=document.getElementById("header").childNodes;

console.log(element);

element=document.getElementById("First").firstChild;

console.log(element);

element=document.getElementById("First").firstElementChild;

console.log(element);

element=document.getElementById("First").lastChild;

console.log(element);

element=document.getElementById("First").lastElementChild;

console.log(element);