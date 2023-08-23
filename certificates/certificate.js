const heading = document.getElementById("heading")
chngclr(heading)
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
       element.style.color = "yellowgreen"   
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