const btn = document.getElementById("adviceBtn")
const badAdviceBtn = document.getElementById("bad-adviceBtn")
const display = document.getElementById("adviceDisplay")
const adviceEyeColors = document.getElementById("advice-eye")
const containerColors = document.getElementById("container")


const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music.",
    "It is better to be alone than in bad company.",
    "don't count the days make the days count"
]

const badAdvice = [
    "Fake it until you make it.",
    "Good things come to those who wait.",
    "Be yourself.",
    "Never take responsibility.",
    "Drive offensively.",
    "Quit School.",
    "Good advice is often annoying - bad advice never is.",
    "depend on others financially.",
    "Spend all your time on soical media.",
    "Buy things that you don't need",
    "Don't learn new skills and stick with what you know"
]


btn.addEventListener("click", displayGoodAdvise)

function displayGoodAdvise(){
  let randomNum = Math.ceil(Math.random() * advice.length ) -1
  display.innerHTML = advice[randomNum]

}


badAdviceBtn.addEventListener("click", displayBadAdvise)

function displayBadAdvise(){
  let randomNum = Math.ceil(Math.random() * badAdvice.length ) -1
  display.innerHTML = badAdvice[randomNum]

}

function generateEyeColors(){
  let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
  adviceEyeColors.style.backgroundColor = hex
 
}

function generateContainerColors(){
  let hex = "#" + Math.floor(Math.random()*16777215).toString(16);
  containerColors.style.backgroundColor = hex
}












 



