let login_form = document.getElementById("login-form")

login_form.onsubmit = (event)=>{
    event.preventDefault()
    let user = document.getElementById("username").value;
   let password = document.getElementById("password").value;
   let cfPassword = document.getElementById("confirmPassword").value;
   let sUser = document.getElementById("user")
   let sPass = document.getElementById("pass")
   let sCfpass = document.getElementById("cfpass")
   let complete = document.getElementById("complete")

   if(user == "")
   {
       sUser.innerHTML = "Please complete your email !";
       
   }

   if(password == "")
   {
       sPass.innerHTML = "Please complete your password !";
       
   }
   if(cfPassword == "")
   {
        sCfpass.innerHTML = "Please confirm your pasword !"
   }
   if(cfPassword !== password)
   {
        sCfpass.innerHTML = " Your password not right !"
   }
   if(password.length < 8 && password.length > 0)
   {
       sPass.innerHTML = "Your password needs 8 characters !"
   }
   if ( user && password && cfPassword !== [])
   {
    complete.style.display = "flex";
    sUser.innerHTML ="";
    sPass.innerHTML = "";
    sCfpass.innerHTML ="";
   }
}