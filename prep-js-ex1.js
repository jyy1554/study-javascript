//실행 방법 : 터미널에 node prep-js-ex1 이력

// Q1. FizzBuzz
for (var i=1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('fizzbuzz');
  }
  else if (i % 3 == 0) console.log('fizz');
  else if (i % 5 == 0) console.log('buzz');
  else console.log(i);
}

//Q2. Biggest Number
var a = 10;
var b = 20;
var c = 30;

var maxNum = a > b ? (a > c ? a : c) :  (b > c ? b : c); //삼항 조건 연산자 이용

console.log(maxNum);



// Q3. Word Position
var word = "dolphin";
var sentence = "Where did Jane get the dolphin from, John?";

var indexOfD = sentence.indexOf(word); // SOMETHING 부분에 dolphin의 d의 위치를 찾는 코드를 작성해보세요.
var indexOfN = indexOfD + word.length -1; // SOMETHING_ELSE 부분에 dolphin의 n의 위치를 찾는 코드를 작성해보세요.

console.log(indexOfD, indexOfN);



indexOfN: for (var i=0; i < sentence.length; i++) {
  if (sentence[i] != word[0]) continue;
  
  for (var j=1; j < word.length; j++) {
    if (sentence[i+j] != word[j]) break;
    if (j == word.length-1) {
      indexOfD = i;
      indexOfN = i + j;
      break indexOfN;
    }
  }
}

console.log(indexOfD, indexOfN);