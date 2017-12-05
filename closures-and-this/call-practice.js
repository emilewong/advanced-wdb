var person = {
    sayHello: function () {
        return 'Hi, ' + this.firstName;
    },
    sayAge: function () {
        return this.firstName + ' is ' + this.age + ' years old.';
    },
};

var ellie = {
    firstName: 'Ellie',
    age: 'unknown'
};

var nikki = {
    firstName: 'Nikki',
    age: 29
};

person.sayHello.call(nikki);
