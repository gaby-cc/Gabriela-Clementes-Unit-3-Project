let title = document.querySelector(".title-screen");
let introScreen = document.querySelector(".introduction-screen");
let storyOpening = document.querySelector(".story-opening");
let optionOneScreen = document.querySelector(".option-one-screen");
let shopScreen = document.querySelector(".sans-shop-screen");
let insideShopScreen = document.querySelector(".inside-shop-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let endingOneText = document.querySelector(".ending-one-text");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwoEnd = document.querySelector(".option-two-end");
let startButton = document.querySelector(".start");
let nextButton = document.querySelector(".next-button");
let chaseButton = document.querySelector(".option-one");
let peachIntro = document.querySelector(".peach-intro");
let input = document.querySelector(".input-name");
let nextButtonTwo = document.querySelector(".next-button-two");
let noButton = document.querySelector(".option-two");
let forest = document.querySelector(".forest");
let tryAgainButton = document.querySelector(".try-again-button");
let buttonSetOne = document.querySelector(".button-set-one");
let rightButton = document.querySelector(".right-button");
let directionScreen = document.querySelector(".direction-screen");
let insideButton = document.querySelector(".go-inside-button");
let sansSpeech = document.querySelector(".sans-speech");
let seedsButton = document.querySelector(".seeds-button");
let nextButtonThree = document.querySelector(".next-button-three");
let nextButtonFour = document.querySelector(".next-button-four");
let buttonSetTwo = document.querySelector(".button-set-two");
let buttonSetThree = document.querySelector(".button-set-three");
let caveEntranceScreenRight = document.querySelector(".cave-entrance-screen-right");
let exploreCaveButtonRight = document.querySelector(".explore-cave-button-right");
let exploreCaveScreenRight = document.querySelector(".explore-cave-screen-right");
let giveSeedsButton = document.querySelector(".give-seeds-button");
let giveSeedsScreen = document.querySelector(".give-seeds-screen");
let nextButtonFive = document.querySelector(".next-button-five");
let runButtonRight = document.querySelector(".run-button-right");
let runScreenRight = document.querySelector(".run-screen-right");
let leftButton = document.querySelector(".left-button");
let leftScreen = document.querySelector(".left-screen");
let nextButtonSix = document.querySelector(".next-button-six");
let nextButtonSeven = document.querySelector(".next-button-seven");
let buttonSetFour = document.querySelector(".button-set-four");
let leftPara = document.querySelector(".left-p");
let caveEntranceScreenLeft = document.querySelector(".cave-entrance-screen-left");
let exploreCaveButtonLeft = document.querySelector(".explore-cave-button-left");
let exploreCaveScreenLeft = document.querySelector(".explore-cave-screen-left");
let runButtonLeft = document.querySelector(".run-button-left");
let useSwordButton = document.querySelector(".use-sword-button");
let useSwordScreen = document.querySelector(".use-sword-screen");
let hitButton = document.querySelector(".hit-button")
let swordEndingScreen = document.querySelector(".sword-ending-screen")
let swordEndingP = document.querySelector(".sword-ending-p")

startButton.onmouseover = function() { 
    startButton.style.backgroundColor = "grey";
}; 

startButton.onmouseout = function() {
    startButton.style.backgroundColor = "black";
};

nextButton.onmouseover = function() { 
    nextButton.style.backgroundColor = "grey";
}; 

nextButton.onmouseout = function() {
    nextButton.style.backgroundColor = "black";
};

chaseButton.onmouseover = function() { 
    chaseButton.style.backgroundColor = "grey";
}; 

chaseButton.onmouseout = function(){
    chaseButton.style.backgroundColor = "black";
};

noButton.onmouseover = function(){
    noButton.style.backgroundColor = "grey";
};

noButton.onmouseout = function(){
    noButton.style.backgroundColor = "black";
};

tryAgainButton.onmouseover = function(){
    tryAgainButton.style.backgroundColor = "grey";
};

tryAgainButton.onmouseout = function(){
    tryAgainButton.style.backgroundColor = "black";
};

startButton.onclick = function() {
    title.style.display = "none";
    introScreen.style.display = "block";
};

nextButton.onclick = function() {
    introScreen.style.display = "none";
    storyOpening.style.display = "block";
    buttonSetOne.style.display = "block";
};

noButton.onclick = function() {
    storyOpening.style.display = "none";
    buttonSetOne.style.display = "none";
    optionTwoScreen.style.display = "block";
};

nextButtonTwo.onmouseover = function() { 
    nextButtonTwo.style.backgroundColor = "grey";
}; 

nextButtonTwo.onmouseout = function() {
    nextButtonTwo.style.backgroundColor = "black";
};

rightButton.onmouseover = function() {
    rightButton.style.backgroundColor = "grey";
};

rightButton.onmouseout = function() {
    rightButton.style.backgroundColor = "black";
};

insideButton.onmouseover = function() {
    insideButton.style.backgroundColor = "grey";
};

insideButton.onmouseout = function() {
    insideButton.style.backgroundColor = "black";
};

leftButton.onmouseover = function() {
    leftButton.style.backgroundColor = "grey";
};

leftButton.onmouseout = function() {
    leftButton.style.backgroundColor = "black";
};

seedsButton.onmouseover = function() {
    seedsButton.style.backgroundColor = "grey";
};

seedsButton.onmouseout = function() {
    seedsButton.style.backgroundColor = "black";
};

nextButtonThree.onmouseover = function() {
    nextButtonThree.style.backgroundColor = "grey";
};

nextButtonThree.onmouseout = function() {
    nextButtonThree.style.backgroundColor = "black";
};

nextButtonFour.onmouseover = function() {
    nextButtonFour.style.backgroundColor = "grey";
};

nextButtonFour.onmouseout = function() {
    nextButtonFour.style.backgroundColor = "black";
};

giveSeedsButton.onmouseover = function() {
    giveSeedsButton.style.backgroundColor = "grey";
};

giveSeedsButton.onmouseout = function() {
    giveSeedsButton.style.backgroundColor = "black";
};

runButtonRight.onmouseover = function() {
    runButtonRight.style.backgroundColor = "grey";
};

runButtonRight.onmouseout = function() {
    runButtonRight.style.backgroundColor = "black";
};

nextButtonFive.onmouseover = function() {
    nextButtonFive.style.backgroundColor = "grey";
};

nextButtonFive.onmouseout = function() {
    nextButtonFive.style.backgroundColor = "black";
};

nextButtonSix.onmouseover = function() {
    nextButtonSix.style.backgroundColor = "grey";
};

nextButtonSix.onmouseout = function() {
    nextButtonSix.style.backgroundColor = "black";
};

nextButtonSeven.onmouseover = function() {
    nextButtonSeven.style.backgroundColor = "grey";
};

nextButtonSeven.onmouseout = function() {
    nextButtonSeven.style.backgroundColor = "black";
};

exploreCaveButtonRight.onmouseover = function() {
    exploreCaveButtonRight.style.backgroundColor = "grey";
};

exploreCaveButtonRight.onmouseout = function() {
    exploreCaveButtonRight.style.backgroundColor = "black";
};

exploreCaveButtonLeft.onmouseover = function() {
    exploreCaveButtonLeft.style.backgroundColor = "grey";
};

exploreCaveButtonLeft.onmouseout = function() {
    exploreCaveButtonLeft.style.backgroundColor = "black";
};

runButtonLeft.onmouseover = function() {
    runButtonLeft.style.backgroundColor = "grey";
};

runButtonLeft.onmouseout = function() {
    runButtonLeft.style.backgroundColor = "black";
};

useSwordButton.onmouseover = function() {
    useSwordButton.style.backgroundColor = "grey";
};

useSwordButton.onmouseout = function() {
    useSwordButton.style.backgroundColor = "black";
};

hitButton.onmouseover = function() {
    hitButton.style.backgroundColor = "grey";
};

hitButton.onmouseout = function() {
    hitButton.style.backgroundColor = "black";
};

forest.ondblclick = function() {
    optionTwoScreen.style.display = "none";
    optionTwoEnd.style.display = "block";
};

tryAgainButton.onclick = function() {
    optionTwoEnd.style.display = "none";
    title.style.display = "block";
};

chaseButton.onclick = function() {
    storyOpening.style.display = "none";
    buttonSetOne.style.display = "none";
    optionOneScreen.style.display = "block";
};

nextButtonTwo.onclick = function() {
    let name = document.querySelector("input").value;
    peachIntro.innerHTML = "Princess Peach:<br>" + name + "! What a wonderful name! What way shall we go?";
    input.style.display = "none";
    nextButtonTwo.style.display = "none";
    directionScreen.style.display = "block";
};

rightButton.onclick = function() {
    optionOneScreen.style.display = "none";
    directionScreen.style.display = "none";
    shopScreen.style.display = "block";
};

insideButton.onclick = function() {
    shopScreen.style.display = "none";
    insideShopScreen.style.display = "block";
};

seedsButton.onclick = function() {
    sansSpeech.innerHTML = "You obtained seeds!";
    buttonSetTwo.style.display = "block";
    seedsButton.style.display = "none";
};

nextButtonThree.onclick = function() {
    let name = document.querySelector("input").value;
    sansSpeech.innerHTML = "Sans:<br> Bone appétit " + name + "! Come again soon!";
    buttonSetTwo.style.display = "none";
    buttonSetThree.style.display = "block";
};

nextButtonFour.onclick = function() {
    insideShopScreen.style.display = "none";
    buttonSetThree.style.display = "none";
    caveEntranceScreenRight.style.display = "block";
};

exploreCaveButtonRight.onclick = function() {
    caveEntranceScreenRight.style.display = "none";
    exploreCaveScreenRight.style.display = "block";
};

giveSeedsButton.onclick = function() {
    exploreCaveScreenRight.style.display = "none";
    giveSeedsScreen.style.display = "block";
};

nextButtonFive.onclick = function() {
    giveSeedsScreen.style.display = "none";
    optionOneEnd.style.display = "block";
    let name = document.querySelector("input").value;
    endingOneText.innerHTML = "Congrats " + name + "! You got the princess's crown back! She rewards you with the goose! Have fun with your new pet and best friend!";
};

runButtonRight.onclick = function() {
    runScreenRight.style.display = "block";
    exploreCaveScreenRight.style.display = "none";
};
    
leftButton.onclick = function() {
    optionOneScreen.style.display = "none";
    directionScreen.style.display = "none";
    leftScreen.style.display = "block";
};

nextButtonSix.onclick = function() {
    buttonSetFour.style.display = "block";
    nextButtonSix.style.display = "none";
    leftPara.innerHTML = "You obtained a sword!";
};

nextButtonSeven.onclick = function() {
    leftScreen.style.display = "none";
    buttonSetFour.style.display = "none";
    caveEntranceScreenLeft.style.display = "block";
};

exploreCaveButtonLeft.onclick = function() {
    caveEntranceScreenLeft.style.display = "none";
    exploreCaveScreenLeft.style.display = "block";
};

runButtonLeft.onclick = function() {
    exploreCaveScreenLeft.style.display = "none";
    runScreenRight.style.display = "block";
};

useSwordButton.onclick = function() {
    exploreCaveScreenLeft.style.display = "none";
    useSwordScreen.style.display = "block";
};
 
hitButton.onclick = function() {
    useSwordScreen.style.display = "none";
    swordEndingScreen.style.display = "block";
    let name = document.querySelector("input").value;
    swordEndingP.innerHTML="You slay the goose and it turns into some delicous chicken nuggets! Congrats " + name + "! You got Peach her crown back and get to keep the dinner as a reward!"
};