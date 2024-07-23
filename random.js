const copy = document.querySelector("#copy");
const passwordBox = document.querySelector("#Password");
const btn = document.querySelector("#btn");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols ="@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase +symbols;

function creatPassword(){
    let password ="";
    password+= upperCase[Math.floor(Math.random()*upperCase.length)];
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+= number[Math.floor(Math.random()*number.length)];
    password+= symbols[Math.floor(Math.random()*symbols.length)];
    

    while(length>password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)]
    }
    console.log(password);
    passwordBox.value = password;
}

btn.addEventListener('click',creatPassword);

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


copy.addEventListener('click',copyPassword);