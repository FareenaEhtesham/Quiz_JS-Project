


var a=document.getElementById("username");




document.myform.username.addEventListener("keypress" ,validatename);


function validatename(){
    var q=/^([A-Z a-z \W]*)$/
    if(q.test(a.value)){
            document.getElementById("s1").textContent="";
    }
    else{
        document.getElementById("s1").textContent="You are only allowed to enter Alphabets and take gap";
    }
}

function required()
{
var empt = document.forms["myform"]["text1"].value;
if (empt == "")
{
    
    document.getElementById("special").textContent=" Required"

}
else 
{
window.open("file:///home/fareena/Documents/JS_Projects/FareenaQuiz/Quiz_Page.html");

}
}
