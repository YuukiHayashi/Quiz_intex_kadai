const quiz = [
    {
        question:'railway',
        answers: ['鉄道','自動車','放射線','競争する'],
        correct:'鉄道'
    },
    {
        question:'meaning',
        answers:['食事','意味','理由','歴史'],
        correct:'意味'
    },
    {
        question:'era',
        answers:['時代','魚','ほら穴','夕暮'],
        correct:'時代'
    },
    {
        question:'bias',
        answers:['論理','偏見','採集','睡眠'],
        correct:'偏見'
    },
    {
        question:'mold',
        answers:['神話','結び目','鋳型','融資'],
        correct:'鋳型'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    const $button = document.getElementsByTagName('button');
    for(i=0;i<$button.length;i++){
        $button[i].textContent = quiz[quizIndex].answers[i];
    }
}
setupQuiz();


const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){

var rn = Math.floor(Math.random()*10);
if (rn < 3){
    swal({title:'正解',text:'すごい!!',button:'OK'});
} else if (rn < 6) {
    swal({title:'正解',text:'流石です!!'});
} else if (rn < 9) {
    swal({title:'正解',text:'よくできました'});
} else {
    swal({title:'正解',text:'おめでとう'});
}
    } else {
var rn = Math.floor(Math.random()*10);
if (rn < 3){
    swal({title:'不正解',text:'もう少し頑張りましょう'});
} else if (rn < 6) {
    swal({title:'不正解',text:'残念!!'});
} else if (rn < 9) {
    swal({title:'不正解',text:'惜しい'});
} else {
    swal({title:'不正解',text:'不正解です'});
}
    }

quizIndex++;
if(quizIndex < quizLength){
        setupQuiz();
} else {
    }
};

for(i=0;i<$button.length;i++){
    $button[i].addEventListener('click',(e)=>{clickHandler(e);});
}
