var numberofDrums = document.querySelectorAll(".drum").length
for (var i=0;i<numberofDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
      
        var button=this.innerHTML
        makesound(button)
        animation(button)
   

})
}
document.addEventListener("keypress",function(event){
    makesound(event.key)
    animation(event.key)
   
})
function makesound(key){
    switch (key) {
        case "w":
            let crash= new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            let kick= new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "s":
            let snare= new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "d":
            let t1= new Audio("sounds/tom-1.mp3")
            t1.play()
            break;
        case "j":
            let t2= new Audio("sounds/tom-2.mp3")
            t2.play()
             break;
        case "k":
            let t3= new Audio("sounds/tom-3.mp3")
            t3.play()
            break;
        case "l":
            let t4= new Audio("sounds/tom-4.mp3")
            t4.play()
                    break;
                
        default:
            break;
    }
}

function animation(currentkey){
    let activate=document.querySelector("."+currentkey)
    activate.classList.add("pressed")

    setTimeout(() => {
        activate.classList.remove("pressed")
    }, 100);

}