var myArray = ["Winter is coming. Speak your wish and stay warm.", "When you play a game of thrones you win or you die. Now speak your mind and let me be.", "Most men would rather deny a hard truth than face it. What would you make of me ?", "Death is so terribly final, while life is full of possibilities. What do you long for ?", "Nothing burns like the cold. I'm freezing here, so speak out !", "Every flight begins with a fall. So fly your wish and let me fall.", "What do we say to the Lord of Death?", "Summer will end soon enough, so tell me what you want.", "A lord must learn that sometimes words can accomplish what swords cannot. So what are your words ?", "A Lannister always pays his debts. How shall I pay mine ?", "A true man does what he will, not what he must. What is your will ?", "The Bear and the Maiden Fair, oh the Bear the Bear. Tell me your wish and I shall be the Maiden Fair."];

document.addEventListener('DOMContentLoaded', function () {
  chrome.browserAction.setIcon({path:"logo.png"});
  var rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("text").innerHTML = rand;
  setTimeout(functionToCall,8000);
  function functionToCall() {
  	chrome.browserAction.setIcon({path:"logo_charcoal.png"});
  	self.close();
  }
});
