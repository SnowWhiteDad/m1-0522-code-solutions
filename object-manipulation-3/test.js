// ----- another version of the main.js file without loading the Lodash and using simpler functions -----
// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// ----------  Algorithim  overview  ----------
// write a main function that takes in an array of players and the number of cards per hand
//    creates a collection of objects that represent players in a game.
//      each player should have a unique name and a hand to hold cards.
//    creates a collection of 52 objects that represent a standard deck of 52 cards.
//      each card should have a rank and a suit.
//    shuffles the deck of cards.
//    deals two cards to each player in a round robin fashion.
//      no two players should have the same card in their hand.
//    finds the player with the highest score
//      if there is a tie,
//        return a two-element array with the first element being the string 'There was a Tie' and the second is an array of the names of the players with the highest score
//       if there is no tie,
//        return an array with the first element being the name of the winning player

// ---------- Script to run the game ----------
console.log(''); // log an empty line to separate the output from the previous output
var players = ['Iron Man', 'Super Man', 'Batman', 'Ip Man']; // assign an array of player names to the players variable
var cardsPerHand = 2; // assign value 2 to the cardsPerHand variable
var playersNames = players; // assign the players array to the playersNames variable
var playersNamestoString = playersNames.join(', '); // convert the playersNames array to a string and assign to the playersNamesString variable

console.log(players.length + ' players: ', playersNamestoString); // log the players' names to the console
console.log('Cards per hand: ', cardsPerHand); // log the number of cards per hand to the console

var result = getWinner(players, cardsPerHand); // call the getWinner function

console.log('\nThe winner is: ', result[0]); // log the winner to the console

// ---------- End script to run the game ----------

// ---------- Define getWinner() function ----------
function getWinner(players, cardsPerHand) { // get the winner of the game
  var result = main(players, cardsPerHand); // call the main function
  if (result[0] === 'There was a Tie') { // check if there is a tie
    var playersNames = result[1]; // assign the array of player names to the playersNames variable
    var playersNamesString = playersNames.join(', '); // convert the playersNames array to a string and assign to the playersNamesString variable
    console.log('\nThere was a tie between ' + playersNamesString); // log the tie to the console
    result = tieBreaker(result, cardsPerHand); // call the tieBreaker function
    return result; // return the result
  }
  return result;
}

// --------- Define main() function ----------
// main function that executes the algorithm overview
function main(players, cardsPerHand) {
  var gamePlayers = createPlayerObjects(players); // create a collection of objects that represent players in a game
  var deck = new Deck(); // create a new deck of cards
  deck.buildDeck(); // build the deck of cards
  deck.shuffle(); // shuffle the deck of cards
  gamePlayers = dealCards(gamePlayers, cardsPerHand, deck); // deal two cards to each player in a round robin fashion
  return getHighestScore(gamePlayers); // find the player with the highest score
}

// ---------- Define tieBreaker() function ----------
function tieBreaker(result, cardsPerHand) { // tieBreaker function
  while (result[1]) { // while there is a tie
    result = main(result[1], cardsPerHand); // call the main function
  }
  return result; // return the result
}

// --------- Define createPlayerObjects() function ----------
function createPlayerObjects(players) {
  var gamePlayers = []; // create an empty array to hold the collection of player objects
  for (var i = 0; i < players.length; i++) { // for each player
    var player = new Player(players[i]); // create a new player object
    gamePlayers.push(player); // add the player object to the collection (array) of player objects
  }
  return gamePlayers; // return the collection of player objects
}

// --------- Define dealCards() function ----------
function dealCards(gamePlayers, cardsPerHand, deck) {
  for (var i = 0; i < gamePlayers.length; i++) { // for each player
    for (var j = 0; j < cardsPerHand; j++) { // deal two cards to each player
      var card = deck.drawCard(); // draw a card from the deck
      gamePlayers[i].hand.push(card); // add the card to the player's hand
    }
  }
  return gamePlayers; //
}

// --------- Define getHighestScore() function ----------
function getHighestScore(gamePlayers) { // get the highest score of the game
  var highestScore = 0; // initialize the highest score to 0
  var highestScoringPlayers = []; // create an empty array to hold the names of the players with the highest score
  for (var i = 0; i < gamePlayers.length; i++) { // for each player
    var score = 0; // initialize the score to 0
    for (var j = 0; j < gamePlayers[i].hand.length; j++) { // for each card in the player's hand
      score += rankvalue(gamePlayers[i].hand[j].rank); // add the rank value of the card to the score
    } // end for each card in the player's hand
    if (score > highestScore) { // if the score is greater than the highestScore
      highestScore = score; // assign the score to the highestScore
      highestScoringPlayers = [gamePlayers[i]]; // assign the player to the highestScoringPlayers array
    } else if (score === highestScore) { // if the score is equal to the highestScore
      highestScoringPlayers.push(gamePlayers[i]); // add the player to the highestScoringPlayers array
    }// end if the score is greater than the highestScore
  } // end for each player
  if (highestScoringPlayers.length === 1) { // if there is only one player with the highest score
    return [highestScoringPlayers[0].name]; // return the name of the player with the highest score
  } else { // if there is a tie
    // create a new array to hold the names of the players with the highest score
    var highestScoringPlayerNames = []; // create an empty array to hold the names of the players with the highest score
    for (i = 0; i < highestScoringPlayers.length; i++) { // for each player with the highest score
      highestScoringPlayerNames.push(highestScoringPlayers[i].name); // push the name of the player to the highestScoringPlayerNames array
    } // end for each player with the highest score

    return ['There was a Tie', highestScoringPlayerNames]; // return the result

  }
}

// ---------- Define constructor Deck() function ----------
function Deck() { // constructor function for the Deck object
  this.cards = []; // create an empty array to hold the cards
  this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // create an array of suits
  this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']; // create an array of ranks
  this.buildDeck = function () { // build the deck of cards
    for (var i = 0; i < this.suits.length; i++) { // for each suit
      for (var j = 0; j < this.ranks.length; j++) { // for each rank
        this.cards.push(new Card(this.suits[i], this.ranks[j])); // push the constructed card of suit[i] and rank[j] to the deck
      } // end for each rank
    } // end for each suit
  }; // end of buildDeck
  this.shuffle = function () { // shuffle the deck of cards
    for (var i = 0; i < this.cards.length; i++) { // for each card
      var randomIndex = Math.floor(Math.random() * this.cards.length); // generate a random index and assign it to the randomIndex variable
      var temp = this.cards[i]; // assign the card to a temp variable
      this.cards[i] = this.cards[randomIndex]; // assign the card at the randomIndex to the card at the index i
      this.cards[randomIndex] = temp; // assign the temp variable to the card at the randomIndex
    } // end for each card
  }; // end of shuffle
  this.drawCard = function () { // draw a card from the deck
    return this.cards.pop(); // remove the last card from the deck and return it
  };// end of drawCard
} // end of Deck constructor function

// ---------- Define constructor Player() function ----------
function Player(name) { // constructor function for the Player object
  this.name = name; // assign the name to the player
  this.hand = []; // create an empty array to hold the cards in the player's hand
} // end of Player constructor function

// ---------- Define constructor Card() function ----------
function Card(suit, rank) { // constructor function for the Card object
  this.suit = suit; // assign the suit to the suit property of the card
  this.rank = rank; // assign the rank to the rank property of the card
}

// ---------- Define rankvalue() function ----------
function rankvalue(rank) { // rankvalue function
  if (rank === 'Ace') { // if the rank is an Ace
    return 11; // return 11
  } else if (rank === 'Jack' || rank === 'Queen' || rank === 'King') { // if the rank is a Jack, Queen, or King
    return 10; // return 10
  } else { // if the rank is not an Ace, Jack, Queen, or King
    return parseInt(rank); // return the rank as an integer
  } // end if the rank is an Ace, Jack, Queen, or King
} // end of rankvalue function
