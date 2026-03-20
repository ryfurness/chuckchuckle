let chuckles =[];
let thisChuckle = 0;
document.querySelector(".enter").addEventListener(
    "click", getChucklefrSearch);

document.querySelector("#left-arrow").addEventListener(
    "click", prevChuckle);

document.querySelector("#right-arrow").addEventListener(
    "click", nextChuckle);
    
document.querySelector(".random").addEventListener(
"click", getChuckleRandom);

document.querySelector('input').onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
      // Enter pressed
      getChucklefrSearch()
      return false;
    }
  }
  
function nextChuckle(){
  if (thisChuckle < chuckles.length-1){ //show next search result
    thisChuckle ++;
    document.querySelector(".joke").innerText  = chuckles[thisChuckle].value;
    document.querySelector("img").src = chuckImg[Math.round(Math.random()*5.499)   ];
  } else getChuckleRandom();
}

function prevChuckle(){
  if (thisChuckle > 0){ //show prev search result
    thisChuckle --;
    document.querySelector(".joke").innerText  = chuckles[thisChuckle].value;
    document.querySelector("img").src = chuckImg[Math.round(Math.random()*5.499)   ];
  } else getChuckleRandom();
}

function getChucklefrSearch(){
  let search = document.querySelector("input").value;
  console.warn(search);
  if (search){
    url = "https://api.chucknorris.io/jokes/search?query="+search;
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      console.log(data.value)
      document.querySelector(".joke").innerText  = data.result[0].value;
      thisChuckle = 0;
      chuckles = data.result;
      document.querySelector("img").src = chuckImg[Math.round(Math.random()*5.499)   ];
    })      
    } else{
      document.querySelector(".joke").innerText = "Nothing entered!";
      document.querySelector(".joke").style.color ="red";
    }
}
  
function getChuckleRandom(){    
  url = "https://api.chucknorris.io/jokes/random"
  fetch(url)
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      console.log(data.value)
      document.querySelector(".joke").innerText  = data.value;
    })
  document.querySelector("img").src = chuckImg[Math.round(Math.random()*5.499)   ];
}


chuckImg = [
  "img/Chuck Agent.jpg",
  "img/Chuck black Belt.jpg",
  "img/Chuck Karate.jpg",
  "img/Chuck Sitting.jpg",
  "img/Chuck with gun.jpg"
  "img/Chuck with guns.jpg"
]
