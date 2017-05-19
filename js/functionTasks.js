function printName() {
  "use strict";

  let planetName = "Земля";
  let userName = "Василий";

  console.log("Задание 1");
  console.log(planetName, userName);
}

function authorization() {
  "use strict";

  let user;
  user = {
    login: prompt("Введите Ваш Логин", ""),
    password: ''
  }

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

function printEvenWhile() {
  "use strict";
  let digit = 0;

  console.log("Задание 3");

  while (digit != 10) {
    digit = digit + 2;
    console.log(digit);
  }
}

function printEvenFor() {
  "use strict";
  console.log("Задание 3.1");

  for (let digit = 2; digit <= 10; digit++) {
    if (digit % 2 == 0) {
      console.log(digit);
    }
  }
}

function checkDigits(firstDigit, secondDigit) {
  
  firstDigit = +firstDigit;
  secondDigit = +secondDigit
  
  if ((firstDigit) && (secondDigit)) {
    return true;
  } else {
    return false;
  }
}

function printPrimeDigit(beginInterval, endInterval) {

  console.log("Задание 4");

  beginInterval = +beginInterval;
  endInterval = +endInterval;

  for (beginInterval; beginInterval <= endInterval; beginInterval++) {
    let divider = 2;
    let prime = true;

    for (divider; ((beginInterval > divider) && (prime)); divider++) {
      if (beginInterval % divider === 0) {
        prime = false;
      }
    }

    if (prime) {
      console.log(beginInterval);
    }
  }
}

printName();
authorization();
printEvenWhile();
printEvenFor();

let beginingInterval = prompt("Введите начало интервала", '');
let endInterval = prompt("Введите конец интервала", '');

if (checkDigits(beginingInterval, endInterval)) {
  printPrimeDigit(beginingInterval, endInterval);
} else {
  console.log("Данные введены некорректно");
}