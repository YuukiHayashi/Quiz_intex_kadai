const quiz = [
    {
        question:'y=x^2 と y=2x-1の接点のx座標は？',
        answers: ['0','1','2','3'],
        correct:'1'
    },
    {
        question:'255を2進数に直すといくつ？',
        answers:['10011100','10000000','11111111','11111110'],
        correct:'11111111'
    },
    {
        question:'10進数の15を16進数表記に直すと？',
        answers:['D','E','F','G'],
        correct:'F'
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
