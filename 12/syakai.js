const quiz = [
    {
        question:'2019年みかんの収穫量全国１位は？',
        answers: ['和歌山','静岡','愛媛','北海道'],
        correct:'和歌山'
    },
    {
        question:'日本で２番目に面積の大きい都道府県は？',
        answers:['兵庫県','広島県','山形県','岩手県'],
        correct:'岩手県'
    },
    {
        question:'1600年に起きた天下分け目の戦いは？',
        answers:['関ケ原の戦い','川中島の戦い','桶狭間の戦い','山崎の戦い'],
        correct:'関ケ原の戦い'
    },
    {
        question:'最澄が新しく広めた仏教は？',
        answers:['浄土宗','真言宗','天台宗','時宗'],
        correct:'天台宗'
    },
    {
        question:'琵琶湖があるのは何県？',
        answers:['長崎県','新潟県','滋賀県','高知県'],
        correct:'滋賀県'
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
