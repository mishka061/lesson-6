let b = 2
let a = +prompt('введите число от 0 до 3')
switch (true){
  case a == b && a < 3:
    console.log('верно')
    break
  case a != b && a < 3:
  console.log('не верно')
  break  
  default:
    console.log('не сработало')
}



let a = prompt('Введите число до 12')
switch (+a) {
    case 1:
    case 2:
    case 3:
        console.log('Зима')
        break;
    case 4:
    case 5:
    case 6:
        console.log('Весна')
        break;
    case 7:
    case 8:
    case 9:
        console.log('Лето')
        break;
    case 10:
    case 11:
    case 12:
        console.log('Осень')
        break;
    default:
        console.log("Нет такого месяца!"); 
        break;
}



let num1 = 1
let num2 = null
let num3 = 2
console.log(num1 ?? num2 ?? num3)
