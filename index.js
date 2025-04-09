// implementation du dark mode
let mode = document.getElementById("mode")
let body = document.querySelector("body")
let darkimage = document.getElementById('dark-image')
let newtodo = document.getElementById('new-todo')
let todolist = document.getElementById('todo-list')
let input = document.getElementById('input')
let txet= document.getElementById('text')
let parent = document.getElementById("parent")
let check = document.getElementById("check")
let checkimg = document.getElementById("chekimg")
let texte = document.getElementById("texte")

mode.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")){
        mode.src = "./assets/image/Combined Shape (1).svg"
        darkimage.src = "./assets/image/Bitmap (1).jpg"
        newtodo.style.backgroundColor = "#25273D"
        input.style.color = "white"
        todolist.style.backgroundColor = "#25273D"
        todolist.style.color = "black"
        body.style.backgroundColor = "#25273D"
    }
    else
    {
        mode.src = "./assets/image/lune.svg"
        darkimage.src = "./assets/image/Bitmap.jpg"
        txet.style.color = "white"
        newtodo.style.backgroundColor = "white"
        todolist.style.backgroundColor = "white"
        body.style.backgroundColor = "white"

    }
}

input.addEventListener("keydown" ,function(event){
    let val = input.value
    if(val.length < 5){
        check.style.backgroundImage = "none"
    }
    else {
        check.style.backgroundImage = "linear-gradient(to bottom, #3710BD , #A42395)";
        checkimg.style.display = "flex"

    }
    if (event.key === "Enter"){
        if(val.length > 5){
            let newelement =  todolist.cloneNode(true)
            newelement.style.display = "flex"
            let tex = newelement.querySelector("#texte")
            if(tex){
                tex.innerHTML = val
            }
            parent.appendChild(newelement)
            checkimg.style.display = "flex";
            //effacer le contenu de l'input
            val = " "
            check.style.backgroundImage = "none"
            parent.style.display = "flex"
        }
    }
})