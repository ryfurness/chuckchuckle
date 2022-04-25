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
    document.querySelector("img").src = chuckImg[Math.round(Math.random()*4.499)   ];
  } else getChuckleRandom();
}

function prevChuckle(){
  if (thisChuckle > 0){ //show prev search result
    thisChuckle --;
    document.querySelector(".joke").innerText  = chuckles[thisChuckle].value;
    document.querySelector("img").src = chuckImg[Math.round(Math.random()*4.499)   ];
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
      document.querySelector("img").src = chuckImg[Math.round(Math.random()*4.499)   ];
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
  document.querySelector("img").src = chuckImg[Math.round(Math.random()*4.499)   ];
}


chuckImg = [
  "https://ultimateactionmovies.com/wp-content/uploads/2017/12/Chuck-Norris-e1559491533788.jpg",
  "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg?itok=2b4A6n29",
  "https://www.gannett-cdn.com/presto/2020/03/10/USAT/14860a5d-3ae8-4049-b4b5-5a02e14c4721-Chuck_Norris_01.JPG?width=2560",
  "https://www.gannett-cdn.com/presto/2020/03/10/USAT/fa7a2862-9e98-4c3f-ad2f-64ba168de6ee-Chuck_Norris_06.JPG?width=2560",
  "https://www.gannett-cdn.com/presto/2020/03/10/USAT/a56292d3-db7e-484d-b86d-0000483fa4d7-Chuck_Norris_16.JPG?width=1588"
]