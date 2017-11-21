function countDown(sec) {
  var countDownTimer = setInterval(function(){

    if(sec > 0) {
      console.log('Timer: ', sec);
    }
    else {
      console.log('Timer: Ring Ring Ring!!!')
      clearInterval(countDownTimer);
    }
    
    sec-=1;
    
  }, 1000);
}