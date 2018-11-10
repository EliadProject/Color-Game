var newColorsButton = document.getElementById("newColors");

var gameButtons = document.getElementsByClassName("gameButtons");



var textStatus = document.getElementById("textStatus");

var header = document.getElementById("header");

var blocks = document.getElementsByClassName("block");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block1");
var block3 = document.getElementById("block1");
var block4 = document.getElementById("block1");
var block5 = document.getElementById("block1");
var block6 = document.getElementById("block1");
var chosenBlockID;


var R;
var G;
var B;
var chosenBlockID;

for (var i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("mouseover", function(){
		this.classList.add("buttonHoverd");
	 });
}
for (var i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("mouseleave", function(){
		this.classList.remove("buttonHoverd");
	 });
}

var randomColorSpan = document.getElementById("random-color");

var hardButton = document.getElementById("hardButton");
var easyButton = document.getElementById("easyButton");

//default hard
var blocksNum = 6;
var allBlocks = 6;
randomColor();

hardButton.addEventListener("click", function(){
	blocksNum = 6;
	randomColor();
})
easyButton.addEventListener("click", function(){
	blocksNum = 3;
	randomColor();
})



function randomColor()
{

	init();

	R = Math.floor(Math.random() * 256) + 1;
	G = Math.floor(Math.random() * 256) + 1;
	B = Math.floor(Math.random() * 256) + 1;
	randomColorSpan.innerText = "(" + R + ", " + G + ", " + B + ")";



	//Gibrishing blockes RGB 
	for (var i=0; i<blocksNum; i++)
	{
		var Rblock = Math.floor(Math.random() * 256) + 1;
		var Gblock = Math.floor(Math.random() * 256) + 1;
		var Bblock = Math.floor(Math.random() * 256) + 1;
		blocks[i].classList.remove("wrong") //removing black background
		blocks[i].style.backgroundColor = 'rgb(' + Rblock + ',' + Gblock + ',' + Bblock + ')'; 

		
	}

	//Random chosen number
	var chosenBlockNum = Math.floor(Math.random() * blocksNum) + 1;
	chosenBlockID  = document.getElementById("block"+chosenBlockNum);
	chosenBlockID.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';

	//Adding onclick event listeners 
	for (var i=0; i<blocksNum; i++)
	{	
		blocks[i].addEventListener("click", blockClicked);
	}
}

function blockClicked () {
	{
		if(this === chosenBlockID) //success
		{
			 textStatus.textContent = "CORRECT!!"//change text status to correct
			 newColorsButton.textContent ="Play Again??" //change new colors to play again 

			 header.classList.remove("header-background");
			 header.style.transition = "background"
			 header.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';//add background color to header
			 
			 //make blocks appear again for new game
			 for (var i=0; i<blocksNum;i++)
			 {
				 if(blocks[i].getElementsByClassName("wrong"))
				 {
					blocks[i].classList.remove('wrong');
				 }
			 }

			 //fill all the blocks with correct background

			 for (var i=0; i<blocksNum;i++)
			 {
				 blocks[i].style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
			 }

			
		}

		else
		{
			this.classList.add("wrong"); //make block disappear with transperacy
			textStatus.textContent = "try again"//change text status to try again

		}

	 }
}
function init()
{
	header.classList.add("header-background"); //init header color
	textStatus.textContent = "" //change text status to correct
	newColorsButton.textContent ="NEW COLORS" //change new game text

	//filling all blocks with black
	for(var i=0;i<allBlocks;i++)
	{
		
		blocks[i].classList.add("wrong");
	}

}

var newGameButton = document.getElementById("newColors");
newGameButton.addEventListener("click", randomColor);

