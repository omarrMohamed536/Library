function phone(inputtxt)
{
  var PhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
	   return true;
     }
   else
     {
	   alert("Not a valid Phone Number");
	   return false;
     }
}

function back1(str) 
{
    return /^[a-zA-Z]+$/.test(str);
}

function back2(str) 
{
    return /^[a-zA-Z]+$/.test(str);
}

function ValidateEmail(input) 
{

    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
}