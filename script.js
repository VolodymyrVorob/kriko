let button = document.querySelector('.btn-1')
let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let all = document.querySelector(".all_question")
let after = document.querySelector('.after')
let timer = document.querySelector('.timer')
function randint(min,max){
    return Math.round(Math.random() * (max - min) + min)
}
let randomsign = ['+','-','*','/']
function getrandomsign(){
    return randomsign[randint(0,3)]
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {  // Цикл проходиться по всіх елементах з кінця до початку
    let j = Math.floor(Math.random() * (i + 1));  // Вибираємо індекс рандомного елемента
    [array[i], array[j]] = [array[j], array[i]] // Міняємо місцями з поточним елементом.
  } 
  return(array)
}
class Question {
    constructor() {
        let a = randint(1,30);
        let b = randint(1,30);
        let s = getrandomsign();
        this.question = `${a} ${s} ${b}`;
        if (s == '+') {
        this.correct = a + b;
        }
          else if (s == '-') {
        this.correct = a - b;
        }
          else if (s =='*') {
        this.correct = a * b;
        }
          if (s == '/') {
        this.correct = Math.round(a / b, 3);
        }
        this.answers = [
            randint(this.correct-15, this.correct - 1),
            randint(this.correct-15, this.correct - 1),
            this.correct,
            randint(this.correct-1, this.correct + 15),
            randint(this.correct-1, this.correct + 15),
        ];
        shuffle(this.answers)
    }
    

    display() {
        question.innerHTML = this.question;
        for (let i = 0; i < this.answers.length; i++) {
            answers[i].innerHTML = this.answers[i];
        }
    }
}
let count_true = 0;
let count = 0;
let cur_question = new Question();
cur_question.display();
for(let i = 0; i<answers.length; i++){
    answers[i].addEventListener ('click',function(){
        if(answers[i].innerHTML == +cur_question.correct){
           answers[i].style.background = '#00FF00'
           count_true ++
                anime({
                targets: answers[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
        }
     else {
          answers[i].style.background = '#B22222'
                anime({
                targets: answers[i],
                background: '#FFFFFF',
                duration: 500,
                delay: 100,
                easing: 'linear'
            })
    }
    count++
    cur_question = new Question()
    setTimeout( cur_question.display(),2000)
})
}
button.addEventListener('click',function(){
  button.style.display = 'none';
  all.style.display = 'flex';
  after.style.display = 'none';
  timer.style.display = 'flex';
  timer.innerHTML = '10';
  setTimeout(function(){
    timer.innerHTML = '9'
  },1000)
  setTimeout(function(){
    timer.innerHTML = '8'
  },2000)
  setTimeout(function(){
    timer.innerHTML = '7'
  },3000)
  setTimeout(function(){
    timer.innerHTML = '6'
  },4000)
  setTimeout(function(){
    timer.innerHTML = '5'
  },5000)
  setTimeout(function(){
    timer.innerHTML = '4'
  },6000)
  setTimeout(function(){
    timer.innerHTML = '3'
  },7000)
  setTimeout(function(){
    timer.innerHTML = '2'
  },8000)
  setTimeout(function(){
    timer.innerHTML = '1'
  },9000)
  setTimeout(function(){
    timer.innerHTML = '0'
  },10000)
  setTimeout(function(){
      button.style.display = 'flex';
  all.style.display = 'none';
  after.style.display = 'flex';
  timer.style.display = 'none';
  let accurasity = Math.round(count_true * 100 / count)
  after.innerHTML = `Правильно: ${count_true} Усього: ${count} Точність: ${accurasity} %`
  }, 10200)
})