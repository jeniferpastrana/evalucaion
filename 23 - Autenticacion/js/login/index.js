const formLogin=document.getElementById("form-login")
const email=document.getElementById("email")
const password=document.getElementById("password")

const URL="http://localhost:3000/users"

// eventos 
formLogin.addEventListener("submit",(e)=>{
    e.preventDefault()
    login()
})

async function login() {

    // 1 la peticion por email
    const response=await fetch(`${URL}?email=${email.value}`)
    const data = await response.json()

    // 2 esta registrado ese email
     if(!data.length){
        console.log("emial no resgistrado");
        return
     }
     console.log("logueado");
    // 3 compara las contraseña
    if(data[0].password === password.value){
        window.location.href="adminitracion.html"
        localStorage.setItem("isAuthorizated","true")

    }else{
        console.log("credenciales incorectas");
    }
}