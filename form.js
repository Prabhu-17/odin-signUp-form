const pwd = document.getElementById('pwd')
const cpwd = document.getElementById('cpwd')
const mssg = document.getElementById('pwd-msg')
let validBorderColor = '1px solid rgb(91, 204, 89)'
let invalidBorderColor = '1px solid red'

pwd.addEventListener('input', checkPasswordLength)
cpwd.addEventListener('input', confirmPassword)

function checkPasswordLength(){
    let psd1=pwd.value.length;
    
    if(psd1<8){
        mssg.textContent="Password length should have been more than or equal to 8"
        pwd.style.border=invalidBorderColor
    }else{
        mssg.textContent=''
        pwd.style.border=validBorderColor
    }
}

function confirmPassword(){
    let psd1=pwd.value
    let psd2=cpwd.value
    if(psd1!==psd2){
             mssg.textContent = "* Passwords do not match";
        pwd.style.border = invalidBorderColor;
        cpwd.style.border = invalidBorderColor;
    } else {
        mssg.textContent = "";
        pwd.style.border = validBorderColor;
        cpwd.style.border = validBorderColor;
    
    }
}
