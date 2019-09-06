alert("Welcome to the Fruit Machine")

document.getElementById("b").addEventListener("click",spin)

function spin(){
    alert ("You are spinning the wheels")
    spinReel("r1")
    spinReel("r2")
    spinReel("r3")
}


function spinReel(reel){
    // alert(reel)
    let i = Math.floor(Math.random()*3)
    // alert(i)
    if(i==0){
        document.getElementById(reel).src = "images/banana.jpeg"
    }
    if (i==1){
        document.getElementById(reel).src = "images/orange.jpeg"
    }
    if (i==2){
        document.getElementById(reel).src = "images/watermelon.jpeg"
    }
        

}



   
        
        


    