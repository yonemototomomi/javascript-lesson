// alert('Hello World!');
console.log('Hello World!');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let testText;
console.log(testText);

let again = '定義しました';
again = '再代入はできます';
console.log(again);

const constant = 'これは定数です';
console.log(constant);

let string = 'JavaScriptの練習';
console.log(string);

let single = '文字列型です';
console.log(single);

let double = '英語だとstringといいます。';
console.log(double);

console.log('elephant');

let name = 'ジョニー';
let greet = '私は' + name + '!';
console.log(greet);

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);

let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let num1 = 25;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let number = 5;
number += 3; // number = number + 3と同じ
console.log(number);

let stringNum = '25';
let numberNum = 2;

console.log(stringNum + numberNum);

let empties = [];

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

// let John = {
//   name: 'John',
//   bloodType: 'A',
//   favorite: 'card',
// };

// console.log(John.bloodType);

let Andy = {};

Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';

console.log(Andy);

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

// function doFunc(callback) {
//   console.log('doFuncが呼び出されました');
//   callback();
// }

// doFunc(function() {
//   console.log('コールバック関数が呼び出されました');
// });

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output);

let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();

let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);

// myFunc()

// function myFunc() {
//   let userAge = 27;
//   console.log(userAge);
// }

// console.log(userAge);   // => userAge is not defined（エラー）

let userAge = 0;  // 変数の定義を関数の外で行う
myFunc();

function myFunc() {
  userAge = 27;  // ここは再代入するように変更
  console.log(userAge); // => 27がConsoleに表示される
}

console.log(userAge); // => 27がConsoleに表示される

if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === 26);
console.log(val == '26');
console.log('hello' === 'world');

let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue') {
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気を読みましょう');
}

// let myAge = 60;
// if (myAge >= 35) {
//   console.log('健康診断でバリウムを飲みます');
// } else if (myAge >= 20) {
//   console.log('お酒が飲めます');
// } else if (myAge >= 18) {
//   console.log('選挙権があります');
// }

let myAge = 12; // 数字を12に変更
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

let loto = 8;

if (loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '不在';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

errMsg === '' ? console.log('ない！') : console.log('ある！');

if (1) {
    console.log('hoge');
}

if (0) {
    console.log('piyo');
}

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
