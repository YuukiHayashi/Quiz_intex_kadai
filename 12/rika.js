const quiz = [
    {
        question:'炭素が燃焼すると何ができるか？',
        answers: ['酸素','二酸化炭素','塩酸','硫酸'],
        correct:'二酸化炭素'
    },
    {
        question:'大気中の水蒸気が冷えて凝結する温度は？',
        answers:['凝固点','露点','沸点','融点'],
        correct:'露点'
    },
    {
        question:'月はどう動いて見える？',
        answers:['東から西に動く','西から東に動く','時期で動きが変わる','季節で動きが変わる'],
        correct:'東から西に動く'
    },
    {
        question:'夏の大三角形に含まれないのは？',
        answers:['ベガ','ベテルギウス','アルタイル','デネブ'],
        correct:'ベテルギウス'
    },
    {
        question:'化学式ＣＯ２は何を表す？',
        answers:['水','水素','二酸化炭素','窒素'],
        correct:'二酸化炭素'
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

