
const navBtn = document.getElementById("navBttn");
navBtn.innerHTML = "&#xe260;"
const toxiic = document.getElementById("navtxt");
const weltxt = document.getElementById("weltxt")
const menu = document.getElementById("menu");
const sendBtn = document.getElementById("button");

navBtn.addEventListener("click", ()=>{
    if(menu.style.marginTop == '-5.5vh'){
        navBtn.style.boxShadow = "none"
        navBtn.style.border = "none"
        menu.style.marginTop ="-50rem";
        navBtn.style.transform = "rotate(0deg)";
        menu.style.transition='1s';
        navBtn.style.transition='1s';
    }else{
        menu.style.marginTop = "-5.5vh"
        navBtn.style.border = "3px solid aqua"
        navBtn.style.borderRadius = "100%";
        navBtn.style.boxShadow = " 2px 2px 10px aqua , -2px -2px 10px aqua" ;
        navBtn.style.transform = "rotate(-90deg)"
        menu.style.transition='1s';
        navBtn.style.transition='1s';

    }
});

var loader = document.getElementById('preloader');

window.addEventListener('load', () => {
    loader.style.display = "none";
});
function menuup(){
    menu.style.marginTop = "-50rem";
    navBtn.style.transform = "rotate(0deg)"
    navBtn.style.boxShadow = "none"
    navBtn.style.border = "none"
    toxiic.style.color="aqua"
   
}
function sendmail(){
    Email.send({
        SecureToken : "14ba612c-77a5-4379-a90c-53e5e141f56d",
        To : 'iamtoxiicman@gmail.com',
        From : "iamtoxiicman@gmail.com",
        Subject : "New Enquiry Form",
        Body : "Name : "+ document.getElementById("name").value +"<br>"+
               "Email : "+ document.getElementById("email").value +"<br>"+
               "Phone no. : "+ document.getElementById("phone").value +"<br>"+
               "Message : "+ document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succefully")
    );
}
chngclr(toxiic)
const special = document.getElementsByClassName("special")

for(let i = 0; i < special.length; i++)
{
   chngclr(special[i]);
}

function chngclr(element){
    let num = Math.random() * 8 ;
    if(num <= 1)
    {
        element.style.color = "red"
    }    
    else if(num > 1 && num <= 2)
    {
       element.style.color = "blue"   
    }
    else if(num > 2 && num <= 3)
    {
       element.style.color = "orange"   
    }
    else if(num > 3 && num <= 4)
    {
       element.style.color = "pink"   
    }
    else if(num > 4 && num <= 5)
    {
       element.style.color = "purple"   
    }
    else if(num > 5 && num <= 6)
    {
       element.style.color = "aliceblue"   
    }
    else if(num > 6 && num <= 7)
    {
       element.style.color = "yellow"   
    }
    else if(num > 7 && num <= 8)
    {
       element.style.color = "aqua"   
    }
}


const form = document.getElementById("contact");
sendBtn.addEventListener("click",()=>{
  if(document.getElementById("name").value != '')
{
   if(document.getElementById("email").value != '')
   {
      if(document.getElementById("phone").value != '')
      {
         if(document.getElementById("message").value != '')
         {
            sendmail();
         }
      }
   }
}
})
