$(document).ready(function (){

    // Quiz Selector 
        $('.quiz-1').on('click', function (){
            $('.welcome').css('display','none');
            $('.quiz-active').css('display','flex');
        })

        $('.quiz-2').on('click', function (){
            $('.welcome').css('display','none');
            $('.quiz-active').css('display','flex');
        })

    // Quiz Answer Selectors 
        $('.answer-1').on('click',function () {
            console.log (this);
            $('.quiz-active').css('display','none');
            $('.end-screen').css('display','flex');
        })
        $('.answer-2').on('click',function () {
            console.log (this);
        })
        $('.answer-3').on('click',function () {
            console.log (this);
        })
        $('.answer-4').on('click',function () {
            console.log (this);
        })
    

});