const quiz = [
  {
    question: 'そうまはいつから本気で勉強しますか？次から選んで！',
    answers: [
      '明日',
      '2022/4/2',
      '2031/4/2',
      '34年後'
    ],
    correct: '2022/4/2'
  },{
    question: 'ひーまの身長は何ｃｍまで伸びますか？次から選んで！',
    answers: [
      '160cm',
      '165cm',
      '175cm',
      '198cm'
    ],
    correct: '198cm'
  },{
    question: 'ゆうまはいつまでマーマと言いますか？次から選んで！',
    answers: [
      '中2',
      '中3',
      '高2',
      '34歳まで'
    ],
    correct: '中2'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;

 //クイズの問題文、選択肢を定義
 const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('^ ^ 正解！');
    score++;
   } else {
     window.alert('不正解ぶー');
   }

quizIndex++;

if(quizIndex < quizLength){
setupQuiz();
} else {
  window.alert('終わり！あなたの正解数は' + score + '/' + quizLength + 'です！');
}

};

//ボタンクリック正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
