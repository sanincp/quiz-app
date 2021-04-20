$(document).ready(function(){

    var scor = new Audio();
    scor.src = "sound/score.mp3";

    var wrong = new Audio();
    wrong.src = "sound/Wrong-answer-sound-effect.mp3";


    $("#ans1").click(function(){

        $("#true-1").show()
        $(".icon-worng-1").show()
        scor.play(); 
    })
    $(".wrong1").click(function(){

        $("#true-1").show()
        $(".icon-worng-1").show()
        wrong.play();
    })

    $("#ans2").click(function(){

        $(".true-2").show()
        $(".icon-worng-2").show()
        scor.play(); 
    })
    $(".wrong2").click(function(){

        $(".true-2").show()
        $(".icon-worng-2").show()
        wrong.play();
    })
   
    $("#ans3").click(function(){

        $(".true-3").show()
        $(".icon-worng-3").show()
        scor.play(); 
    })
    $(".wrong3").click(function(){

        $(".true-3").show()
        $(".icon-worng-3").show()
        wrong.play();
    })

    $("#ans4").click(function(){

        $(".true-4").show()
        $(".icon-worng-4").show()
        scor.play(); 
    })
    $(".wrong4").click(function(){

        $(".true-4").show()
        $(".icon-worng-4").show()
        wrong.play();
    })

    $("#ans5").click(function(){

        $(".true-5").show()
        $(".icon-worng-5").show()
        scor.play(); 
    })
    $(".wrong5").click(function(){

        $(".true-5").show()
        $(".icon-worng-5").show()
        wrong.play();
    })

    $("#ans6").click(function(){

        $(".true-6").show()
        $(".icon-worng-6").show()
        scor.play(); 
    })
    $(".wrong6").click(function(){

        $(".true-6").show()
        $(".icon-worng-6").show()
        wrong.play();
    })
})