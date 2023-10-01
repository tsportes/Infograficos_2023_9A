/* Alternar estados */

$(".opcao").click(function() {
    resetScroll();
    if ($(this).is(".ativo")) {
        $(this).removeClass("ativo");
    } else {
        $(".opcao").removeClass("ativo");
        $(this).addClass("ativo");

        $('.arrows').animate({
            opacity: 1,
        }, 100);
    }
});

$(".opcao a").click(function(event) {
    event.stopPropagation();
});


// Arrows

function resetScroll() {
    alreadyScrolled = false;
    $(".opcao__conteudo").scrollTop(0);
}

let alreadyScrolled = false;

$('.opcao__conteudo').scroll(function() {
    if (!alreadyScrolled) {
        if ($('.opcao__conteudo').scrollTop() > 100) {
            $('.arrows').animate({
                opacity: 1,
            }, 100);
        } else {
            $('.arrows').animate({
                opacity: 0,
            }, 100);
        }
        alreadyScrolled = true;
    }
});

$(document).ready(function() {
    // Ao passar o mouse por cima da imagem
    $(".qrcode_img").hover(function() {
        let tooltipText = $(this).attr("data-text");
        let tooltip = $("<div class='tooltip'></div>").text(tooltipText);

        $("body").append(tooltip);
        tooltip.css({
            top: $(this).offset().top - tooltip.height() - 15,
            left: $(this).offset().left - (tooltip.width() / 2) + ($(this).width() / 2)
        });
        tooltip.fadeIn();
    }, function() {
        $(".tooltip").remove();
    });
});