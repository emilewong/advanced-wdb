var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if(XHR.readyState === 4) {
   if(XHR.status === 200) {
        console.log('Ready state is ' + XHR.readyState);
        console.log(XHR.responseText);
    }
    else {
        console.log('Something went wrong! :(');
    } 
  }
};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send(); 