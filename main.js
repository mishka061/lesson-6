
let b = +prompt('Введите число от 0 до 3');
switch(b){
    case 0:
      console.log('Вы ввели число 0')   
        break
    case 1:
      console.log('Вы ввели число 1')   
      break
    case 2:
    case 3:
      console.log('Вы ввели число 2 или число 3')   
        break
    default:
      console.log('Не сработало')
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