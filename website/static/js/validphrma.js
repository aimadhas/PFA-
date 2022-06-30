// nav bar
let nav = document.getElementById("one")
let li = document.getElementById("tow")
let li1 = document.getElementById("ol")
let li2 = document.getElementById("lo")
let burger = document.getElementById("two")
burger.onclick = function(){
    nav.classList.toggle("active")
    burger.classList.toggle("one")
    li.classList.toggle("POP")
    li1.classList.toggle("POP")
    li2.classList.toggle("POP")
}
li.onclick = function(){
    nav.classList.toggle("active")
    burger.classList.toggle("one")
    li.classList.toggle("POP")
    li1.classList.toggle("POP")
    li2.classList.toggle("POP")
}
li1.onclick = function(){
    nav.classList.toggle("active")
    burger.classList.toggle("one")
    li.classList.toggle("POP")
    li1.classList.toggle("POP")
    li2.classList.toggle("POP")
}
li2.onclick = function(){
    nav.classList.toggle("active")
    burger.classList.toggle("one")
    li.classList.toggle("POP")
    li1.classList.toggle("POP")
    li2.classList.toggle("POP")
}





// #################
// form validateur


let one1 = document.getElementById("Nom")
let two = document.getElementById("email")
let three = document.getElementById("name")
let five = document.getElementById("adrs")
console.log(typeof three)
one1.addEventListener("keyup", function(){
    let chek = document.getElementById("check")
    let exlama = document.getElementById("exlama")
    if(one1.value.length == 0 || one1.value.length < 3){
        one1.style.border="1px solid red"
        exlama.style.display="block"
        chek.style.display="none"
        return false
    }
    else{
        one1.style.border="1px solid green"
        exlama.style.display="none"
        chek.style.display="block"
    }
})
two.addEventListener("keyup", function(){
    let echek = document.getElementById("echeck")
    let eexlama = document.getElementById("eexlama")
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(two.value.match(regExp)){
        two.style.border="1px solid green"
        eexlama.style.display="none"
        echek.style.display="block"
    }
    else{
        two.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }
})
three.addEventListener("keyup", function(){
    let echek = document.getElementById("tcheck")
    let eexlama = document.getElementById("texlama")
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(three.value.match(phoneno)){
        three.style.border="1px solid green"
        eexlama.style.display="none"
        echek.style.display="block"
    }
    else{
        three.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }
})
five.addEventListener("keyup", function(){
    let echek = document.getElementById("acheck")
    let eexlama = document.getElementById("aexlama")
    if(five.value.length == 0 || five.value.length < 8){
        five.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }
    else{
        five.style.border="1px solid green"
        eexlama.style.display="none"
        echek.style.display="block"
    }
})






















// // validate form
function validate(){
    
    if((one1.value.length == 0 || one1.value.length < 3)){
        let chek = document.getElementById("check")
        let exlama = document.getElementById("exlama")
        one1.style.border="1px solid red"
        exlama.style.display="block"
        chek.style.display="none"
        return false
    }

    if(two.value.length == 0 || two.value.length < 3){
        let echek = document.getElementById("echeck")
        let eexlama = document.getElementById("eexlama")
        two.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!three.value.match(phoneno)){
        let echek = document.getElementById("tcheck")
        let eexlama = document.getElementById("texlama")
        three.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }

    if(five.value.length == 0 || five.value.length < 8){
        let echek = document.getElementById("acheck")
        let eexlama = document.getElementById("aexlama")
        five.style.border="1px solid red"
        eexlama.style.display="block"
        echek.style.display="none"
        return false
    }

    else {
        let cong = document.getElementById("congo")
        let image = document.getElementById("image")
        let body = document.body
        form.remove()
        image.remove()
        body.style.cssText= "background-color: #EFEFEF"
        cong.style.display="block"
    }


}