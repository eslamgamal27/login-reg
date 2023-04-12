let allContent = document.getElementById('allContent')
let overlayCon = document.getElementById('overlayCon')
let overlayBtn = document.getElementById('overlayBtn')

overlayBtn.addEventListener('click',() => {
    allContent.classList.toggle('right-panel-active')
});

// =============== style form =================== //


let signUpName = document.getElementById('signUpName')
let signUpEmail = document.getElementById('signUpEmail')
let signUpPassword = document.getElementById('signUpPassword')
let signup = document.getElementById('signup')
let alertName = document.getElementById('alertName') 
let alertEmail = document.getElementById('alertEmail')  
let alertPassword = document.getElementById('alertPassword')  
let signInUserEmail = document.getElementById('signInUserEmail')  
let signInUserPassword = document.getElementById('signInUserPassword')  
let signin = document.getElementById('signin')  
let emailExist = document.getElementById('emailExist')  
let passwordExist = document.getElementById('passwordExist')  








let userData;
if(localStorage.getItem('informForUser') != null){
    userData = JSON.parse(localStorage.getItem('informForUser'))
}else{
    userData =[]
}

signup.addEventListener('click',function(){
   let newData = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value
   }

   if(checkName() == false || checkEmail() == false || checksignUpPassword() == false || userEmailExist() != -1 || loginn().length == 0){
     if(checkName() == false){

     }
     if(checkEmail() == false){

     }
     if(checksignUpPassword() == false){

     }
     if(userEmailExist() != -1){
        emailExist.classList.replace('d-none','d-block')
     }

   }else{
    emailExist.classList.replace('d-block','d-none')
    userData.push(newData)
    localStorage.setItem('informForUser', JSON.stringify(userData))
   }
   



})


signUpName.addEventListener('blur',checkName)

function checkName(){
     
   let reg = /^[A-Z][a-z]{1,8}[0-9]?[0-9]?[0-9]?$/

    if(reg.test(signUpName.value) == true){
        alertName.classList.replace('d-block','d-none')
        return true
    } else{
        alertName.classList.replace('d-none','d-block')
       return false
    }
}

signUpEmail.addEventListener('blur',checkEmail)

function checkEmail(){
     
   let reg = /^[a-zA-Z][a-z]{3,7}[0-9]{2,5}@[a-z]{5,8}\.[a-z]{2,3}$/

    if(reg.test(signUpEmail.value) == true){
        alertEmail.classList.replace('d-block','d-none')
        return true
    } else{
        alertEmail.classList.replace('d-none','d-block')
       return false

    }
}


signUpPassword.addEventListener('blur',checksignUpPassword)

function checksignUpPassword(){
     
   let reg =  /^[A-Z][a-zA-Z0-9!@#$%^&*]{6,16}$/

    if(reg.test(signUpPassword.value) == true){
        alertPassword.classList.replace('d-block','d-none')
        return true
    } else{
        alertPassword.classList.replace('d-none','d-block')
       return false
    }
}



function userEmailExist(){
    // debugger;
 let rez = userData.findIndex((ele=> ele.email == signUpEmail.value))
    console.log(rez);
    return rez;
}



signin.addEventListener('click',function(){
   
//   function loginn(){
    let rez = userData.filter((el)=> el.email == signInUserEmail.value && el.password == signInUserPassword)
    // return rez
    if (rez.length != 0)
    {
        window.href
    }
  //}
})






