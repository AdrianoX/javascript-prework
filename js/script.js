{

    const playGame = function(playerInput){
      clearMessages();
    
  
      const getMoveName = function(randomNumber){
        if(randomNumber == 1){
          return 'kamien';
        } else if(randomNumber == 2){
          return 'papier';
        } else if(randomNumber == 3){
          return 'nozyce';
        } else return 'nieznany ruch';
  }
  
      const randomNumber = Math.floor(Math.random() * 3 + 1);
      console.log('Wylosowana liczba to: ' + randomNumber);
  
      const argComputerMove = getMoveName(randomNumber);
      printMessage('Komputer wybral: ' + argComputerMove);
  
      const argPlayerMove = getMoveName(playerInput);
      console.log('Gracz wpisal: ' + playerInput);
      printMessage('Twój ruch to: ' + argPlayerMove);
  
  
      const displayResult = function(argComputerMove, argPlayerMove){
        if (argComputerMove == "kamien" && argPlayerMove == "papier"){
          printMessage("Zwyciestwo : )!");
        } else if (argComputerMove == "kamien" && argPlayerMove == "nozyce") {
          printMessage("Komputer wygrał : (");
        } else if (argComputerMove == "papier" && argPlayerMove == "kamien") {
          printMessage("Komputer wygrał : (");
        } else if (argComputerMove == "papier" && argPlayerMove == "nozyce") {
          printMessage("Zwycięstwo  : )!");
        } else if (argComputerMove == "nozyce" && argPlayerMove == "papier") {
          printMessage("Komputer wygrał = (");
        } else if (argComputerMove == "nozyce" && argPlayerMove == "kamien") {
          printMessage("Zwycięstwo  : )!");
        } else if (argComputerMove == argPlayerMove){
          printMessage("Remis = |");
        } else { 
          printMessage('Wrong move ! Available options: 1-2-3')
        } 
      }
      displayResult(argComputerMove, argPlayerMove);
    }
  
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

  
}
  