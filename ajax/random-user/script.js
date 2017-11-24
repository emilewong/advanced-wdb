/* global fetch */

var fullName = document.querySelector('#fullname'),
    username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    city = document.querySelector('#city'),
    avatar = document.querySelector('#avatar'),
    btn = document.querySelector('#btn'),
    url = 'https://randomuser.me/api/';

btn.addEventListener('click', getUser);

function getUser() {
    fetch(url)
        .then(function(res) {
            return res.json().then(function(data){
              return data.results[0];
            })
        })
        .then(updateProfile)
        .catch(handleErrors);
}

function updateProfile(user) {
    avatar.src = user.picture.medium;
    fullName.innerText = constructName(user.name);
    username.innerText = user.login.username;
    email.innerText = user.email;
    city.innerText = capitalizeCity(user.location.city);
}

function handleErrors(res){
  if(!res.ok) {
    btn.innerText = 'Uh-Oh... Something went wrong.' ;
  }
}

function constructName(data) {
    var fullName = '';

    fullName += data.first[0].toUpperCase() + data.first.slice(1) + ' ' + data.last[0].toUpperCase() + data.last.slice(1);

    return fullName;
};

function capitalizeCity(data) {
    var city = data.split(' ');
    var cap = '';

    for (var i = 0; i < city.length; i++) {
        for(var j = 0; j < city[i].length; j++) {
            if(city[i][j] === '-') {
                city[i] = city[i].split('');
                city[i][j+1] = city[i][j+1].toUpperCase();
                city[i] = city[i].join('');
            }
        }
        cap += city[i][0].toUpperCase() + city[i].slice(1) + ' ';
    }

    return cap;
};
