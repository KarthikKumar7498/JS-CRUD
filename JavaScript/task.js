function validate()
{
    val=true;
    if(( document.getElementById("commodityname").value == "")||( document.getElementById("description").value == "")||( document.getElementById("price").value == "")||( document.getElementById("category").value == ""))
    {
    alert("All fields are compulsory"); 
    val=false;
    }
    else if((document.getElementById("price").value)<0)
    {
    alert("Price can't be negative"); 
    val=false;
    }
    else{
        val=true;
    }
    return val;
    
}

function changeSettings() 
{
  if(loggedIn == true) 
  {
     
  } 
  else if(loggedIn == false)
  {
    alert("You must be logged in to do that.")
  }
}





function logout()
{
  if(loggedIn == true)
  { 
    hideLogout();
  }
  else
  alert("You should Log in first")
}

function hideLogout()
{
  document.getElementById('login').style.visibility = 'hidden';
}

/*
addname.value = localStorage.getItem('addname');
addname.oninput = () => {
  localStorage.setItem('addname', addname.value)
};
*/



