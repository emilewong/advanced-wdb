/*  global $ fetch axios */

var xhrReq = document.getElementById('xhr'),
    fetchReq = document.getElementById('fetch'),
    jqueryReq = document.getElementById('jquery'),
    axiosReq = document.getElementById('axios');

var quote = document.getElementById('quote'),
    url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


//
//AJAX Request Buttons - Click Events
//


//XHR
xhrReq.addEventListener('click', function() {
    XHRRequest(url)
        .then(displayQuote)
        .catch(handleErrors);
});

//Fetch
fetchReq.addEventListener('click', function() {
    fetchRequest(url);
});

//JQuery AJAX
jqueryReq.addEventListener('click', function() {
    jqueryRequest(url);
});

//Axios
axiosReq.addEventListener('click', function() {
    axiosRequest(url);
});


//
//AJAX REQUEST FUNCTIONS
//


//XHR
function XHRRequest(url) {
    return new Promise(function(resolve, reject) {
        var XHR = new XMLHttpRequest();

        XHR.onload = function() {
            if (XHR.readyState == 4 && XHR.status == 200) {
                var quote = JSON.parse(XHR.responseText)[0];
                resolve(quote);
            }
            else {
                reject({
                    status: XHR.status,
                    text: 'Something went wrong'
                });
            }
        };

        XHR.onerror = function() {
            reject({
                status: XHR.status,
                text: 'Something went wrong'
            });
        };

        XHR.open('GET', url);
        XHR.send();
    });
}

//Fetch
function fetchRequest(url) {
    fetch(url)
        .then(function(req) {
            return req.json().then(function(quote) {
                return quote[0];
            })
        })
        .then(displayQuote)
        .catch(handleErrors);
}

//jQuery AJAX
function jqueryRequest(url) {
    $.ajax(url)
        .done(function(data) {
            displayQuote(data[0]);
        })
        .fail(handleErrors);
}

//Axios
function axiosRequest(url) {
    axios.get(url)
        .then(function(res) {
            displayQuote(res.data[0]);
        })
        .catch(handleErrors);
}


//
//HELER FUNCTIONS
//


//Dislay Quote
function displayQuote(text) {
    quote.innerText = text;
}

//Handle Errors
function handleErrors(res) {
    if (res.status) {
        console.log(res.status);
    }
    quote.innerText = 'Something went wrong... :(';
}
