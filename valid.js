function registered()
{
    var username=document.getElementById('username').value;
    var email=document.getElementById('mail').value;
    var password=document.getElementById('pwd').value;

    localStorage.setItem('name',username);
    localStorage.setItem('umail',email);
    localStorage.setItem('upswd',password);
}
var gname= localStorage.getItem('name');
console.log(gname);



function login()
{
    var email=document.getElementById('email').value;
    var password=document.getElementById('pswd').value;
  var rmail=localStorage.getItem('umail');
   var rp= localStorage.getItem('upswd');
   console.log(email);
    if(email == rmail && password == rp)
    {
        alert("successfully login");
    }
    else{
        alert("login failed");
    }
    
}

