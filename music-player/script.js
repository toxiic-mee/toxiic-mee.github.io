const playbox = document.getElementById("playbox");
const pausebtn = document.getElementById("pausebtn");
pausebtn.style.width = "15vw"
pausebtn.style.textAlign="center"
pausebtn.style.fontSize = "2rem"
const prevbtn = document.getElementById("prevbtn");
prevbtn.style.display = "none"
const nextbtn = document.getElementById("nextbtn");
nextbtn.style.display = "none"
const playimg = document.getElementById("playimg");
const albumname = document.getElementById("albumname");
const songname = document.getElementById("songname");
const pic = document.getElementById("pic");
const songk1 = new Audio("./king/tu_aake_dekhle.mp3");
const songk2 = new Audio("./king/maan_meri_jaan.mp3");
const songk3 = new Audio("./king/oops.mp3");
const songk4 = new Audio("./king/pablo.mp3");
const songk5 = new Audio("./king/ektarfa.mp3");
const songk6 = new Audio("./king/iiconic.mp3");
const songk7 = new Audio("./king/no_less.mp3");
const songk8 = new Audio("./king/bazzi.mp3");
const songk9 = new Audio("./king/mafia.mp3");
const songh1 = new Audio("./hurnoor/wallian.mp3");
const songh2 = new Audio("./hurnoor/parshawan.mp3");
const songh3 = new Audio("./hurnoor/moonlight.mp3");
const songh4 = new Audio("./hurnoor/jatta.mp3");
const songh5 = new Audio("./hurnoor/tareefan.mp3");
const songh6 = new Audio("./hurnoor/wah_kya_nazare.mp3");
const songt1 = new Audio("./top-10/baazigar.mp3");
const songt2 = new Audio("./top-10/black_beatles.mp3");
const songt3 = new Audio("./top-10/attention.mp3");
const songt4 = new Audio("./top-10/starboy.mp3");
const songt5 = new Audio("./top-10/prisoner.mp3");
const songt6 = new Audio("./top-10/kabhii_tumhhe.mp3");
const songt7 = new Audio("./top-10/senorita.mp3");
const songt8 = new Audio("./top-10/the_hills.mp3");
const songt9 = new Audio("./top-10/misa_misa.mp3");
const songt10 = new Audio("./top-10/i_wash_my_hands_in_blood.mp3");
const songlist = document.getElementById("songlist");
const albumlist = document.getElementById("albumlist");
albumlist.addEventListener("change" ,()=>
{
 var chosen = albumlist.value
 if(chosen == "top")
 {
    albumname.innerHTML = "TOP-10";
        playimg.innerHTML = `<img id="pic" src="./top-10/top-10.jpg">`
        songlist.innerHTML = `
        <ul id="songlist">
        <li id="onet" class="songnum">Baazigar</li>
        <li id="twot" class="songnum" >Black Beatles</li>
        <li id="threet" class="songnum">Attention</li>
        <li id="fourt" class="songnum">Starboy</li>
        <li id="fivet" class="songnum">Prisoner</li>
        <li id="sixt" class="songnum">Kabhii Tumhhe</li>
        <li id="sevent" class="songnum">Senorita</li>
        <li id="eightt" class="songnum">The Hills</li>
        <li id="ninet" class="songnum">Misa Misa</li>
        <li id="tent" class="songnum">Hands in Blood</li>
    </ul>`
    var onet = document.getElementById("onet");
    var twot = document.getElementById("twot");
    var threet = document.getElementById("threet");
    var fourt = document.getElementById("fourt");
    var fivet = document.getElementById("fivet");
    var sixt = document.getElementById("sixt");
    var sevent = document.getElementById("sevent");
    var eightt = document.getElementById("eightt");
    var ninet = document.getElementById("ninet");
    var tent = document.getElementById("tent")
    onet.addEventListener("click", () => {
         playhead(heading)
pausemusic();    
        songname.innerHTML = onet.innerHTML
        songt1.play();
    })
    twot.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = twot.innerHTML
        songt2.play();
    })
    threet.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = threet.innerHTML
        songt3.play();
    })
    fourt.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = fourt.innerHTML
        songt4.play();
    })
    fivet.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = fivet.innerHTM
        songt5.play();
    })
    sixt.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = sixt.innerHTML
        songt6.play();
    })
    sevent.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = sevent.innerHTML
        songt7.play();
    })
    eightt.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = eightt.innerHTML
        songt8.play();
    })
    ninet.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = ninet.innerHTML
        songt9.play();
    })
    tent.addEventListener("click", () => {
        playhead(heading)
pausemusic();
        songname.innerHTML = tent.innerHTML
        songt10.play();
    })
 }
 else if(chosen == "king")
 {
    albumname.innerHTML = "KING";
    playimg.innerHTML = `<img id="pic" src="./king/king.jpg">`
    songlist.innerHTML = `
    <ul id="songlist">
    <li id="onek" class="songnum">Tu Aake Dekhle</li>
    <li id="twok" class="songnum" >Maan Meri Jaan</li>
    <li id="threek" class="songnum">Oops</li>
    <li id="fourk" class="songnum">Pablo</li>
    <li id="fivek" class="songnum">Ektarfa</li>
    <li id="sixk" class="songnum">IICONIC</li>
    <li id="sevenk" class="songnum">No Less</li>
    <li id="eightk" class="songnum">Baazi</li>
    <li id="ninek" class="songnum">Mafia</li>
</ul>`
var onek = document.getElementById("onek");
var twok = document.getElementById("twok");
var threek = document.getElementById("threek");
var fourk = document.getElementById("fourk");
var fivek = document.getElementById("fivek");
var sixk = document.getElementById("sixk");
var sevenk = document.getElementById("sevenk");
var eightk = document.getElementById("eightk");
var ninek = document.getElementById("ninek");
onek.addEventListener("click", () => {
    heading.style.boxShadow = "2px 2px 15px aqua, -2px -2px 15px aqua"
       playhead(heading)
pausemusic();
    songname.innerHTML = onek.innerHTML
    songk1.play();
})
twok.addEventListener("click", () => {
    playhead(heading)
pausemusic(); 
    songname.innerHTML = twok.innerHTML
    songk2.play();
})
threek.addEventListener("click", () => {
    playhead(heading)
pausemusic();   
    songname.innerHTML = threek.innerHTML
    songk3.play();
})
fourk.addEventListener("click", () => {
    playhead(heading)
pausemusic();   
    songname.innerHTML = fourk.innerHTML
    songk4.play();
})
fivek.addEventListener("click", () => {
      playhead(heading)
pausemusic();   
    songname.innerHTML = fivek.innerHTML
    songk5.play();
})
sixk.addEventListener("click", () => {
    playhead(heading)
pausemusic();   
    songname.innerHTML = sixk.innerHTML
    songk6.play();
})
sevenk.addEventListener("click", () => {
    playhead(heading)
pausemusic();   
    songname.innerHTML = sevenk.innerHTML
    songk7.play();
})
eightk.addEventListener("click", () => {
    playhead(heading)
pausemusic();   
    songname.innerHTML = eightk.innerHTML
    songk8.play();
})
ninek.addEventListener("click", () => {
    playhead(heading)
pausemusic();
        
    songname.innerHTML = ninek.innerHTML
    songk9.play();
})
 }
 else if(chosen == "hurnoor")
 {
    albumname.innerHTML = "HURNOOR";
    playimg.innerHTML = `<img id="pic" src="./hurnoor/hurnoor.webp">`
    songlist.innerHTML = `
    <ul id="songlist">
    <li id="oneh" class="songnum">Wallian</li>
    <li id="twoh" class="songnum" >Parshawan</li>
    <li id="threeh" class="songnum">Moonlight</li>
    <li id="fourh" class="songnum">Jatta</li>
    <li id="fiveh" class="songnum">Tareefan</li>
    <li id="sixh" class="songnum">Wah Kya Nazare</li>
</ul>`
var oneh = document.getElementById("oneh");
        var twoh = document.getElementById("twoh");
        var threeh = document.getElementById("threeh");
        var fourh = document.getElementById("fourh");
        var fiveh = document.getElementById("fiveh");
        var sixh = document.getElementById("sixh");
        oneh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
            songname.innerHTML = oneh.innerHTML
            songh1.play();
        })
        twoh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
           
            songname.innerHTML = twoh.innerHTML
            songh2.play();
        })
        threeh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
            songname.innerHTML = threeh.innerHTML
            songh3.play();
        })
        fourh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
            songname.innerHTML = fourh.innerHTML
            songh4.play();
        })
        fiveh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
            songname.innerHTML = fiveh.innerHTM
            songh5.play();
        })
        sixh.addEventListener("click", () => {
            playhead(heading)
pausemusic();
            songname.innerHTML = sixh.innerHTML
            songh6.play();
        })

 }})

 pausebtn.addEventListener("click", () => {
    heading.style.boxShadow = "2px 2px 15px red , -2px -2px 15px red"
    let head = document.getElementById("heading")
    head.style.boxShadow = "2px 2px 10px red , -2px -2px 10px red"
pausemusic();
        
})

function playhead(element){
    let num = Math.random() * 8 ;
    if(num <= 1)
    {
        element.style.boxShadow = "2px 2px 15px azure , -2px -2px 15px azure"
    }    
    else if(num > 1 && num <= 2)
    {
        element.style.boxShadow = "2px 2px 15px azure , -2px -2px 15px azure"
  
    }
    else if(num > 2 && num <= 3)
    {
        element.style.boxShadow = "2px 2px 15px aliceblue , -2px -2px 15px aliceblue"

    }
    else if(num > 3 && num <= 4)
    {
        element.style.boxShadow = "2px 2px 15px blue , -2px -2px 15px blue"

    }
    else if(num > 4 && num <= 5)
    {
        element.style.boxShadow = "2px 2px 15px aqua , -2px -2px 15px aqua"
  
    }
    else if(num > 5 && num <= 6)
    {
        element.style.boxShadow = "2px 2px 15px pink , -2px -2px 15px pink"
 
    }
    else if(num > 6 && num <= 7)
    {
        element.style.boxShadow = "2px 2px 15px yellowgreen , -2px -2px 15px yellowgreen"

    }
    else if(num > 7 && num <= 8)
    {
        element.style.boxShadow = "2px 2px 15px yellow , -2px -2px 15px yellow"
  
    }
}
function pausemusic(){
    songt1.pause();
    songt2.pause();
    songt3.pause();
    songt4.pause();
    songt5.pause();
    songt6.pause();
    songt7.pause();
    songt8.pause();
    songt9.pause();
    songt10.pause();
    songk1.pause();
    songk2.pause();
    songk3.pause();
    songk4.pause();
    songk5.pause();
    songk6.pause();
    songk7.pause();
    songk8.pause();
    songk9.pause();
    songh1.pause();
    songh2.pause();
    songh3.pause();
    songh4.pause();
    songh5.pause();
    songh6.pause();
   
}

const random = document.getElementById("random");
random.addEventListener("click",()=>{
    songname.innerHTML= "Playing Random"
    let num = Math.random() * 25 ;
    if(num <= 1)
     {       
        pausemusic()
        songt1.play()
    }    
    else if(num > 1 && num <= 2)
    {
        pausemusic()
        songt2.play()
    }
    else if(num > 2 && num <= 3)
    {
        pausemusic()
        songt3.play()
    }
    else if(num > 3 && num <= 4)
    {
        pausemusic()
        songt4.play()
    }
    else if(num > 4 && num <= 5)
    {
        pausemusic()
        songt5.play()
  
    }
    else if(num > 5 && num <= 6)
    {
        pausemusic()
        songt6.play()
   }
    else if(num > 6 && num <= 7)
    {
        pausemusic()
        songt7.play()
    }
    else if(num > 7 && num <= 8)
    {
        pausemusic()
        songt8.play()  
    }
    else if(num > 8 && num <= 9)
    {
        pausemusic()
        songt9.play()  
    }
    else if(num > 9 && num <= 10)
    {
        pausemusic()
        songt10.play()
  
    }
    else if(num > 10 && num <= 11)
    {
        pausemusic()
        songk1.play()  
    }
    else if(num > 11 && num <= 12)
    {
        pausemusic()
        songk2.play()
  
    }
    else if(num > 12 && num <= 13)
    {
        pausemusic()
        songk3.play() 
    }
    else if(num > 13 && num <= 14)
    {
        pausemusic()
        songk4.play() 
    }
    else if(num > 14 && num <= 15)
    {
        pausemusic()
        songk5.play() 
    }
    else if(num > 15 && num <= 16)
    {
        pausemusic()
        songk6.play() 
    }
    else if(num > 16 && num <= 17)
    {
        pausemusic()
        songk7.play() 
    }
    else if(num > 17 && num <= 18)
    {
        pausemusic()
        songk8.play()  
    }
    else if(num > 18 && num <= 19)
    {
        pausemusic()
        songk9.play()  
    }
    else if(num > 19 && num <= 20)
    {
        pausemusic()
        songh1.play()
  
    }
    else if(num > 20 && num <= 21)
    {
        pausemusic()
        songh2.play()  
    }
    else if(num > 21 && num <= 22)
    {
        pausemusic()
        songh3.play() 
    }
    else if(num > 22 && num <= 23)
    {
        pausemusic()
        songh4.play()
  
    }
    else if(num > 23 && num <= 24)
    {
        pausemusic()
        songh5.play() 
    }
    else if(num > 24 && num <= 25)
    {
        pausemusic()
        songh6.play()  
    }
})
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