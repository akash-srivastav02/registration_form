let show1 = document.querySelector("#show1");
let pass1 = document.querySelector("#pass1");
let show2 = document.querySelector("#show2");
let pass2 = document.querySelector("#pass2");

show1.addEventListener("mouseover", ()=> {
    pass1.type = "text";
})
show1.addEventListener("mouseout", ()=> {
    pass1.type = "password";
})

show2.addEventListener("mouseover", ()=> {
    pass2.type = "text";
})
show2.addEventListener("mouseout", ()=> {
    pass2.type = "password";
})

let btn = document.querySelector("button");

btn.onclick = ()=> {
    if (pass1.value === pass2.value && pass1.value != "") {
        location.href = "success.html";
        btn.preventDefault();
    }else {
        alert("Something went wrong");
    }
}
