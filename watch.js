// STORING ALL THE REQUIRED DATA FROM THE HTML ID's

let blackTheme = "https://i.imgur.com/iOeUBV7.png"
let peachTheme = "https://i.imgur.com/PTgQlim.png"
let blueTheme = "https://i.imgur.com/Mplj1YR.png"
let purpleTheme = "https://i.imgur.com/xSIK4M8.png"

let watch = document.getElementById('watchImage')

let black = document.getElementById('black')
let peach = document.getElementById('peach')
let blue = document.getElementById('blue')
let purlpe = document.getElementById('purlpe')


// COLOR CHANGE

if(watch != null)
{
  black.onclick = function() 
  {
    watch.src = blackTheme;
  }
}
if(watch != null)
{
  peach.onclick = function() 
  {
    watch.src = peachTheme;
  }
}
if(watch != null)
{
  blue.onclick = function() 
  {
    watch.src = blueTheme;
  }
}
if(watch != null)
{
  purple.onclick = function() 
  {
    watch.src = purpleTheme;
  }
}


// COLOR CHANGE

if(watch != null)
{
  black.onclick = function() 
  {
    watch.src = blackTheme;
  }
}
if(watch != null)
{
  peach.onclick = function() 
  {
    watch.src = peachTheme;
  }
}
if(watch != null)
{
  blue.onclick = function() 
  {
    watch.src = blueTheme;
  }
}
if(watch != null)
{
  purple.onclick = function() 
  {
    watch.src = purpleTheme;
  }
}


// CURRENT TIME

function time () 
{
  var today = new Date()
  document.getElementById('currentTime').innerHTML = today.getHours() +":"+ today.getMinutes() +":"+ today.getSeconds()
  setTimeout(function(){time()}, 1000)
}
time();


// HEARTBEAT DETAILS

let heartBeatBtn = document.getElementById('showHeartBeat')
let heartBeatRate = document.getElementById('heartRate')


// TIME DETAILS

let showTimeBtn = document.getElementById('showTime')
let showCurrrentTime = document.getElementById('currentTime')


heartBeatBtn.onclick = function()
{
  heartBeatRate.style.display = 'block'
  showCurrrentTime.style.display = 'none'
}

showTimeBtn.onclick = function()
{
  heartBeatRate.style.display = 'none'
  showCurrrentTime.style.display = 'block'
}

// random heart beat rate

let randomNum = document.getElementById('hbNumber')

function randomNumber () 
{
  randomNum.innerHTML = Math.floor(Math.random() * 51) + 80
  console.log(randomNum.innerHTML)
}
randomNumber();
