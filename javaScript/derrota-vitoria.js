  function vitoria() {
  pincel.beginPath()
  pincel.fillStyle = '#050505';
  pincel.font = " 25px 'Lato'";
  pincel.fillText('Parabéns, você acertou!!', 405, 100);
  pincel.fillText('Para continuar jogando clique em "jogar novamente."', 405, 150);
}

function derrota() {
  escrevePalavraSecreta();
  pincel.beginPath()
  pincel.fillStyle = '#050505';
  pincel.font = " 25px 'Lato'";
  pincel.fillText('Você perdeu! A palavra  era:', 405, 100);
  pincel.fillText('Para continuar jogando clique em "jogar novamente."', 405, 150);
  
}

function escrevePalavraSecreta() {
  pincel.beginPath()
  pincel.font = " 30px 'Lato'";
  pincel.fillStyle = '#ffffff';
  pincel.fillText(palavraSecreta, 730,100);
}
