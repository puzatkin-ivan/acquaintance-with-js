
function printName() {
  var planetName = "Земля";
  var userName = "Василий";

  console.log("Задание 1");
  console.log(planetName, userName);
}

function authorization() {

  var user;
    user = {
      login: prompt("Введите Ваш Логин", ""),
      password: ''
    };

  if (user.login == "Админ") {

    user.password = prompt("Введите Ваш Пароль", "");

    if (user.password == "Тёмный Властелин") {
        alert("Добро Пожаловать");
    } else if (user.password == null) {
       alert("Вход отменён");
    } else {
       alert("Пароль Неверен");
    }

  } else if (user.login == null) {
      alert("Вход Отменён");

  } else {

      alert("Я Тебя не знаю");

  }
}

function even() {
  var digit = 0;

  alert("Задание 3 в консоли");
  console.log("Задание 3");

  while (digit != 10) {
    digit = digit + 2;
    console.log(digit);
  }

}

function primeDigit() {
  var digit;
  var previusDigit;

  alert("Задание 4 в консоли");
  console.log("Задание 4");

  Prime:
    for (digit = 2; digit <= 10; digit++ ) {

      for (previusDigit = 2; previusDigit < digit; previusDigit++){

        if (digit % previusDigit == 0) continue Prime;

      }

      console.log(digit);
   }
}

printName();
authorization();
even();
primeDigit()
