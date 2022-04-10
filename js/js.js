
$(document).ready(function(){

    "use strict"

    $("input:text").on("keyup", function(){

        $(".name-user").text($(this).val())
    
    })


    $("textarea").on("keyup", function(){

        $(".message-user").text($(this).val())
    
    })

})

$(document).ready(function(){

    $(window).on("scroll", function(){

        var scroll = $(window).scrollTop()

        if (scroll > 800){ 

            $(".landing .aro-gro").css("display","block")

        }else{

            $(".landing .aro-gro").css("display","none")

        }
    });

    $(".landing .aro-gro").on("click", function(){

        $(window).scrollTop(0)

    });

});

let section = document.querySelector(".sales-ratio")

    spans = document.querySelectorAll(".prog span")

window.onscroll = function(){
    if (window.scrollY >= section.offsetTop -100){

        spans.forEach((span) => {
            span.style.width = span.dataset.progress;

        });
    }
};

$(document).ready(function(){

    $(".write-message .message-name").on("keyup",function(e){

    let = myName = e.target.value.length;

        if (myName >= 24){

            e.target.value = e.target.value.substr(0,24)
        }

    });

});

$(function(){

    $('body').css("paddingTop", $(".navbar").innerHeight())

});
