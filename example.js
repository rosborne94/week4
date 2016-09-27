$(document).ready(function(){
  var input = $("#game .input input");
  var randomArr = [];
  var inputArr = [];
  var trys = 10;
  var score = 0;
  
  function createRandom(){
    while(randomArr.length < input.length){
      var random = Math.floor(Math.random() * 10);
       if(randomArr.indexOf(random) === -1 ){
				 randomArr.push(random);
			  };
    };
  };
  
  function newGame(){
		randomArr.length = 0;
		createRandom();
		input.val('');
		input.removeClass('m1 m2 m3');
	};
  
  function updatText(){
		$(".try").text(trys);
		$(".score").text(score);
	};
  
	function highScores() {
		var highScore = localStorage.getItem('highScore') || 0;
			if (score > highScore) {
			  highScore = score;
			  localStorage.setItem('highScore', highScore);
			}
		$(".highscore").text(highScore);
	};
  
  $("#game .help-link").click(function(){
		$(".help").addClass("open");
	});
    
  $("#game .modal .close").click(function(){
		$(".modal").removeClass("open");
	});
  
  createRandom();
  updatText();
	highScores();
  
  $("#game .check").click(function() {
    trys -= 1;
    inputArr.length = 0;
    
    input.each(function(){
			inputArr.push(parseInt($(this).val(), 10));
		});
    
    for( var x=0; x < input.length; x++ ){
      if(randomArr.indexOf(parseInt(inputArr[x])) === -1 ){
        input.eq(x).removeClass('m1 m2 m3').addClass("m1");
      }else if(randomArr[x] === inputArr[x]){
        input.eq(x).removeClass('m1 m2 m3').addClass("m2");
      }else{
				input.eq(x).removeClass('m1 m2 m3').addClass("m3");
			}
    };
    
    function compareArr(randomArr, inputArr){
      for (var j = 0; j < randomArr.length; j++) {
				if (randomArr[j] != inputArr[j]) {
					return false;
				}
			}
      return true;
    }
    function winModal(){
       $(".winlose").addClass("open");
     	 $(".message").text("Correct");
			 $(".message-two").css("display", "none");
			 $(".close-modal").text("next");
       newGame();
			 trys += 4;
			 score += 1;
    };
    function loseModal(){
       $(".winlose").addClass("open");
       $(".message").text("Game over");
			 $(".message-two").css("display", "block").text("your score : "+score);
			 $(".close-modal").text("play again");
			newGame();
			trys = 10;
			score = 0;
    };
    
    var winS = compareArr(randomArr, inputArr);
    if (winS) {
			if(trys === 0){
				winModal();
				}
      winModal();
		}else{
			if(trys === 0){
				loseModal();
			};
		};
    
    
    updatText();
    highScores();
  });
  
});