document.getElementById("orb").addEventListener("click",function(){
    changeToNight()
});

function changeToNight(){
    if(document.getElementById("orb").className == "sun"){
        //change to moon
        document.getElementById("sky").className = "night";
        document.getElementById("orb").className = "moon";
        document.getElementById("moonspot1").className = "visible";
        document.getElementById("moonspot2").className = "visible";
        document.getElementById("moonspot3").className = "visible";
    }
    else if(document.getElementById("orb").className == "moon"){
        //change to sun
    }
    
}