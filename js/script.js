function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    } else if(randomNumber == 2){
        return 'papier';
    } else if(randomNumber == 3){
        return 'nożyce';
    } else "nieznany ruch";
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Komputer wybrał: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); 
console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);


/*console.log('moves:', argComputerMove, argPlayerMove);*/
function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Zwycięstwo : )!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Komputer wygrał : (");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Komputer wygrał : (");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Zwycięstwo  : )!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Komputer wygrał = (");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Zwycięstwo  : )!");
    } else if (argComputerMove == argPlayerMove) {
      printMessage("Remis = |");
    } else { 
      printMessage( 'Wrong move ! Available options: 1-2-3')
    } 
  }
displayResult(argComputerMove, argPlayerMove);


