'use strict';

//! Первая задача
const income = +prompt('Какой у вас доход?');

if (!Number.isNaN(income) && income > 0) {
  let taxAmount = 0;

  if (income < 15000) {
    taxAmount = income * 13 / 100;
    console.log(`Сумма налога составляет ${taxAmount}`);
  } 

  if (income >= 15000 && income < 50000) {
    taxAmount = income * 20 / 100;
    console.log(`Сумма налога составляет ${taxAmount}`);
  } 

  if (income >= 50000) {
    taxAmount = income * 30 / 100;
    console.log(`Сумма налога составляет ${taxAmount}`);
  } 
  
} else {
  console.log('Вы ввели некорректную сумму');
}