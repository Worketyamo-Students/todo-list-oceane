let form = document.getElementById("formulaire")
let input = document.getElementById("champ")
let liste = document.getElementById("ma-liste")

form.addEventListener("submit",(e) =>{
    let val = input.value
    e.preventDefault()
    if(val){
        console.log(input.value)
        let li = document.createElement("li")
        li.textContent = val
        liste.appendChild(li)
        li.style.listStyleType = "circle"

    }
    else
    {
        alert( "remplir le champ de saisie")
    }
})