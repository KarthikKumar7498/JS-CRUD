var match =1;
var boolean;
var countfromls = 1;
localStorage.setItem('count',countfromls);
var pass = new Array()
var user = new Array()
var loggedIn=false;

function log(){
    document.getElementById("username").focus();
}

function sign(){
    document.getElementById("un").focus();
}

function logi(){
    this.login();
    document.getElementById("logform").onsubmit = function () {
        if(boolean == true)
        {
          alert("Sucessfully Logged in!");
          
          window.location.replace("complaint.html");
          
        }
        else if(boolean==false)
        {
          alert("Wrong password/username!");
          document.getElementById("username").value = "";
              document.getElementById("password").value = "";
        }   
        return false; 
    }
}


var username = []; var password=[];
var f ;
var id =0;
function signup() 
    {
           if(countfromls>=1)
           {
                if((document.getElementById("un").value == "")) 
                {
                    alert("Enter an username"); 
                    match =0;
                }
                else if( document.getElementById("email").value== "")
                {
                    alert("Enter an email");
                    match =0;
                } 
                else if((document.getElementById("pw").value == "")) 
                {
                    alert("Enter an username"); 
                    match =0;
                }
                

                arrayFromStorage = JSON.parse(localStorage.getItem("username"));
                if(localStorage.getItem("username") == null)
                {
                    match=1;
                }
                else
                 {
                    for(i=0;i<arrayFromStorage.length;i++)
                    {
                    
                        if( document.getElementById("un").value == arrayFromStorage[i])
                        {
                            match=2;
                        }
                  }
                }
            }
                
                if( match ==2)
                {
                    alert("Oops! Username already exists!");
                }
             else if(match==1)
             {
              if(window.localStorage["username"] != null)
              username = JSON.parse(window.localStorage["username"]);
              username.push(document.getElementById("un").value);
              window.localStorage["username"] = JSON.stringify(username);
              
              if(window.localStorage["password"] != null)
              password = JSON.parse(window.localStorage["password"]);
              password.push(document.getElementById("pw").value);
              window.localStorage["password"] = JSON.stringify(password);
              
              alert("Succesfully Registered");
     }
       
}


function login() 
{
  user = JSON.parse(localStorage.getItem("username"));
  pass= JSON.parse(localStorage.getItem("password"));
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username=="")
    {
        alert("Enter an username!");
        
    }
  else if(password=="")
    {
      alert("Enter a password!");
    }
    else if(username=="admin" && password=="admin")
    {
       alert("Admin Logged In!")
      window.location.assign("trackstatus.html");   
    }
    else 
    {

    for(i=0;i<user.length;i++)
    {
        if(username == user[i] && password == pass[i]) 
        {
        boolean = true; 
        id=i;
        alert(id);
        localStorage.setItem("userid",id);
        break;
        } 
        else
        {
            boolean = false;
        }
    }
    
    }
    return boolean;

}

