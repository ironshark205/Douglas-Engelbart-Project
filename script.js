var answers = ['1979', '1963', '1985', '1954'];

var correct = 1;

var question = "What year was the mouse invented?";

var answerButtons = document.getElementsByClassName("quizButton");

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        //disableAll();
    if(this.innerHTML == answers[correct]) {
        this.setAttribute('style','background-color:rgb(76,175,80);');
        //disableAll();
    } else {
        this.setAttribute('style','background-color:rgb(210,50,35);');
    }
});

}

function disableAll() {
    for(var num=0; num<answersButtons.length; num++) {
        answerButtons[num].setAttribute('disabled',true);
    }
}