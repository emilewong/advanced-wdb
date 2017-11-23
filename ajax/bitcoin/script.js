var usd = document.querySelector('#usd'),
    gbp = document.querySelector('#gbp'),
    eur = document.querySelector('#eur'),
    updated = document.querySelector('#updated'),
    info = document.querySelector('#disclaimer'),
    btn = document.querySelector('#btn');

getData();
btn.addEventListener('click', getData);

function getData() {
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
        if(XHR.readyState < 4){
            btn.classList.add('spin');
        }
        if (XHR.readyState === 4 && XHR.status === 200) {
            
            btn.classList.remove('spin');
            
            var data = JSON.parse(XHR.responseText),
                usdRate = data.bpi.USD.rate,
                gbpRate = data.bpi.GBP.rate,
                eurRate = data.bpi.EUR.rate,
                time = data.time.updated,
                disclaimer = data.disclaimer;

            usd.innerText = usdRate;
            gbp.innerText = gbpRate;
            eur.innerText = eurRate;
            updated.innerText = time;
            info.innerText = disclaimer;
        }
    };

    XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    XHR.send();
}
