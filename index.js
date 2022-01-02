// var numberofDrums = document.querySelectorAll(".drum").length
// for (var i=0;i<numberofDrums;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
      
//         var button=this.innerHTML
//         makesound(button)
//         animation(button)
   

// })
// }




// document.addEventListener("keypress",function(event){
//     makesound(event.key)
//     animation(event.key)
   
// })
// function makesound(key){
//     switch (key) {
//         case "w":
//             let crash= new Audio("sounds/crash.mp3")
//             crash.play()
//             break;
//         case "a":
//             let kick= new Audio("sounds/kick-bass.mp3")
//             kick.play()
//             break;
//         case "s":
//             let snare= new Audio("sounds/snare.mp3")
//             snare.play()
//             break;
//         case "d":
//             let t1= new Audio("sounds/tom-1.mp3")
//             t1.play()
//             break;
//         case "j":
//             let t2= new Audio("sounds/tom-2.mp3")
//             t2.play()
//              break;
//         case "k":
//             let t3= new Audio("sounds/tom-3.mp3")
//             t3.play()
//             break;
//         case "l":
//             let t4= new Audio("sounds/tom-4.mp3")
//             t4.play()
//                     break;
                
//         default:
//             break;
//     }
// }

// function animation(currentkey){
//     let activate=document.querySelector("."+currentkey)
//     activate.classList.add("pressed")

//     setTimeout(() => {
//         activate.classList.remove("pressed")
//     }, 100);

// }
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>

  <head>
    <meta charset="utf-8">
    <title>Drum Kit</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
    <style>body {
      text-align: center;
      background-color: #C2FFF9;
    }
    
    h1 {
      font-size: 5rem;
      color: #000000;
      font-family: "Arvo", cursive;
      text-shadow: 3px 0 #ff0b79;
    
    }
    
    footer {
      color: #ff00d0;
      font-size: 3rem;
      font-family: sans-serif;
    }
    
    .w {
     background-image:url("images/crash.png");
    }
    
    .a {
    background-image: url("images/kick.png");
    }
    
    .s {
      background-image: url("images/snare.png");
    }
    
    .d {
      background-image: url("images/tom1.png");
    }
    
    .j {
      background-image: url("images/tom2.png");
    }
    
    .k {
      background-image: url("images/tom3.png");
    }
    
    .l {
      background-image: url("images/tom4.png");
    }
    
    .set {
      margin: 10% auto;
    }
    
    .game-over {
      background-color: red;
      opacity: 0.8;
    }
    
    .pressed {
      box-shadow: 0 3px 4px 0 #DBEDF3;
      opacity: 0.5;
    }
    
    .red {
      color: red;
    }
    
    .drum {
      outline: none;
      border: 10px solid #404B69;
      font-size: 5rem;
      font-family: 'Arvo', cursive;
      line-height: 2;
      font-weight: 900;
      color: #DA0463;
      text-shadow: 3px 0 #DBEDF3;
      border-radius: 15px;
      display: inline-block;
      width: 150px;
      height: 150px;
      text-align: center;
      margin: 10px;
      background-color: white;
    }
    </style>
  </head>
  
  <body>
  
    <h1 id="title">Drum 🥁 Kit</h1>
    <div class="set">
      <button class="w drum">w</button>
      <button class="a drum">a</button>
      <button class="s drum">s</button>
      <button class="d drum">d</button>
      <button class="j drum">j</button>
      <button class="k drum">k</button>
      <button class="l drum">l</button>
    </div>
  
    <footer>
      Made with ❤️ my Me.
    </footer>
    <script src="index.js">
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
      
    </script>
  </body>
  
  </html>
  
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});