// Create your variables
var images = ["./assets/images/mintcrystal.jpg", "./assets/images/pinkcrystal.jpg", "./assets/images/quartz.jpg", "./assets/images/whitecrystal.jpg"]
var wins = 0;
var losses = 0;
var targetNumber;
var counter = 0;

// Create the target number in between the number 20-140.
	function randomNumber () {
    targetNumber = Math.floor(Math.random() * 140) + 20;
    $(".target-number").html(targetNumber);
	}
// Create Image Attributes
	function createCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
      crystal.attr("src", images[i]);
      // Each crystal will have a random value between 1 - 24.
			crystal.attr("value", (Math.floor(Math.random() * 24) + 1));
      crystal.attr("height", "125");
      crystal.attr("width", "125");
      $(".images").append(crystal);
		}
	}
  
function inputHTML () {
  $(".userscore").html("<p><strong>Wins:</strong> " + wins + "</p>" + "<p><strong>Losses:</strong> " + losses + "</p>");
  $(".estimating-number").html(counter);
}

// Create on-click function
	function onClick () {
		counter += parseInt($(this).attr("value"));
    $(".estimating-number").html(counter);
    // After every win the target number will change.
		if (counter == targetNumber) {
			wins++;
			gameReset();
    } 
    // After every loss will add onto losses.
		else if (counter > targetNumber) {
			losses++;
			gameReset();
		};
	};

  $(document).on("click", ".crystal", onClick);
  
  // After every win/loss the score will be set back to 0.
	function gameReset () {
		randomNumber ();
		counter = 0;
		inputHTML ();
		createCrystals ();
	}

  // Calling Functions
	randomNumber();
	inputHTML ();
  createCrystals ();

