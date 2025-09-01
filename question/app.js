// Q1 変数
// 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。
// 例：私のニックネームはごっしーです。年齢は28歳です。
let nickname = 'ともみ';
let age = 28
let me = '私のニックネームは' + nickname + 'です。年齢は'+ age + '歳です。';
console.log(me); 

// Q2 配列
// 変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、
// その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。
// 例：私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python','Go'];
let languagesText = `私の好きな言語は${languages[0]}です。
次は${languages[3]}を勉強してみたいです。`;
console.log(languagesText);

// Q3 オブジェクト
// 下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4 配列×オブジェクト
// 下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let favoriteGame = playerList[1].favorites[1];
console.log(favoriteGame);

// Q5 四則演算
// Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

let totalAge = 0;
for (let i = 0; i < playerList.length; i++) {
  totalAge += playerList[i].age;
}

console.log(totalAge);
let averageAge = totalAge / playerList.length;
console.log(averageAge);
