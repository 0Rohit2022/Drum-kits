const kits = ["crash" , "kick" , "snare", "tom" ]
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const buttonEl = document.createElement("button");

    containerEl.appendChild(buttonEl);
    buttonEl.classList.add("btn");
    buttonEl.innerText = kit;
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3";
    buttonEl.style.backgroundImage = "url( images/"+ kit +".png)"
    containerEl.appendChild(audioEl);
    buttonEl.addEventListener("click", () =>{
        buttonEl.style.transform = "scale(.9)";
        setTimeout(() => {
            buttonEl.style.transform = "scale(1)"; 
        }, 100);
        audioEl.play();
        
    });
    window.addEventListener("keydown", (event) => {
       if(event.key === kit.slice(0,1)){
        audioEl.play();
        buttonEl.style.transform = "scale(.9)";
        setTimeout(() => {
            buttonEl.style.transform = "scale(1)"; 
        }, 100);
       }
      
    })
    
});
