const quiz = [
    {
        question:'「たけくらべ」は誰の作品か？',
        answers: ['坪内逍遙','二葉亭四迷','樋口一葉','島崎藤村'],
        correct:'樋口一葉'
    },
    {
        question:'「一握の砂」は誰の歌集か？',
        answers:['北原白秋','斎藤茂吉','石川啄木','芥川龍之介'],
        correct:'石川啄木'
    },
    {
        question:'三島由紀夫の代表作は？',
        answers:['殺戮にいたる病','金閣寺','銀閣寺','河童'],
        correct:'金閣寺'
    },
    {
        question:'「枕草子」の作者は？',
        answers:['阿仏尼','清少納言','和泉式部','紫式部'],
        correct:'清少納言'
    },
    {
        question:'「檸檬」はだれの作品か',
        answers:['坂口安吾','尾崎紅葉','梶井基次郎','志賀直哉'],
        correct:'梶井基次郎'
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
