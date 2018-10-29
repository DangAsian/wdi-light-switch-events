var lightBut = document.body.querySelector('.switch.on')
const ld = document.getElementsByClassName('light')[0]
const status = document.body.querySelector('h1.status')


lightBut.addEventListener("click", function(){
  if (ld.classList.contains("light")){
    ld.classList = "dark"
  } else if (ld.classList.contains("dark")){
    ld.classList = "light"
  }

  if (lightBut.classList.contains("switch" && "on")){
    lightBut.classList = "switch off"
    status.innerHTML = "Hey, who turned off the lights?"

  } else if (lightBut.classList.contains("switch" && "off")) {
    lightBut.classList = "switch on"
    status.innerHTML = "It's so bright in here!"
  }


  //
  //
  // if (lightBut.classList.contains("switch on")){
  //   lightBut.classList = "switch off"
  // }

});


// lightBut.addEventListener("click", function(event){
//   console.log(event)
// });
