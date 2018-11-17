$(document).ready(function(){

    var selected = false;
    var selected_payment = [false, false];
    var price = 25;
    var oldValue = 1;
    var shipping = 0;
    var clearing = true ;
    var clearing2 = true ;
    var clearing3 = true ;

    phoneScrollInit();
    $('.chose:first-child').css({'background-color': 'var(--color2)', 'color': 'var(--color1)'});

    delayAni('about_us_title .paragraph_block span', 'slide', 0);
    delayAni('about_us_content', 'about_us_content', 500);
    delayAni('about_us_content .paragraph_block:nth-child(1) span', 'slide', 1000);
    delayAni('face', 'face', 1700);
    delayAni('quote_container p', 'quote', 2000);
    delayAni('french_flag path', 'flag_animate', 2000);
    delayAni('french_flag line:nth-child(3)', 'flag_animate', 2500);
    delayAni('french_flag line:nth-child(2)', 'flag_animate', 2700);
    delayAni('french_flag line:nth-child(1)', 'flag_animate', 2900);
    delayAni('american_flag path', 'flag_animate', 2000);
    delayAni('choice:first-child', 'slide', 0);
    delayAni('choice:last-child', 'slide', 100);

    delayAni('description_title', 'slide', 0);
    delayAni('text_info', 'slide', 100);
    delayAni('chose', 'slide', 200);
    delayAni('size', 'slide', 300);
    delayAni('ul', 'slide', 400);
    delayAni('details', 'slide', 500);
    delayAni('price', 'slide', 600);
    delayAni('materials', 'slide', 700);
    delayAni('made', 'slide', 800);
    delayAni('amount_left', 'slide', 900);
    delayAni('order', 'slide', 1000);

    $('.order').mouseover(function(){
        $(this).children().addClass('block-in');
    });
    $('.order').mouseleave(function(){
        $(this).children().addClass('block-out');
        $(this).children().removeClass('block-in');
        setTimeout(function(){
            $('.order .block-hover').removeClass('block-out');
        },200);
    });

    $('.chose').mouseover(function(){
        $(this).find('.block-hover').addClass('block-in');
    });
    $('.chose').mouseleave(function(){
        $(this).find('.block-hover').addClass('block-out');
        $(this).find('.block-hover').removeClass('block-in');
        setTimeout(function(){
            $('.chose .block-hover').removeClass('block-out');
        },200);
    });

    $('.chose_payment').mouseover(function(){
        $(this).find('.block-hover').addClass('block-in');
    });
    $('.chose_payment').mouseleave(function(){
        $(this).find('.block-hover').addClass('block-out');
        $(this).find('.block-hover').removeClass('block-in');
        setTimeout(function(){
            $('.chose_payment .block-hover').removeClass('block-out');
        },200);
    });
    
    $('.first_name_block').mouseover(function(){
        $(this).find('.block-hover').addClass('block-in');
    });
    $('.first_name_block').mouseleave(function(){
        $(this).find('.block-hover').addClass('block-out');
        $(this).find('.block-hover').removeClass('block-in');
        setTimeout(function(){
            $('.first_name_block .block-hover').removeClass('block-out');
        },200);
    });

    $('.sizeli').mouseover(function(){
        $(this).find('.block-hover').addClass('block-in');
    });
    $('.sizeli').mouseleave(function(){
        $(this).find('.block-hover').addClass('block-out');
        $(this).find('.block-hover').removeClass('block-in');
        setTimeout(function(){
            $('.sizeli .block-hover').removeClass('block-out');
        },200);
    });

    $('.payment_outer input').mouseleave(function(){
        if($(this).val().length === 0){
            $(this).removeClass('entered');
        }
        else{
            $(this).addClass('entered');
        }
    });

    $('.payment_outer input').focusout(function(){
        if($(this).val().length === 0){
            $(this).removeClass('entered');
        }
        else{
            $(this).addClass('entered');
        }
    });

    for(i=1;i<=11;i++){
        var elem = 'american_flag line:nth-child(' + i + ')';
        time = 2400 + (i*100);
        delayAni(elem, 'flag_animate2', time);
    }
    
    $('.sizeli').click(function(){
        selected = true ;
        $('.sizeli').css({'background-color': 'var(--color1)', 'color': 'var(--color2)'});
        $(this).css({'background-color': 'var(--color2)', 'color': 'var(--color1)'});
        if($(this).index() === 0)
            $('.order_info_block:nth-child(3) .product_price').html('XS');
        if($(this).index() === 1)
            $('.order_info_block:nth-child(3) .product_price').html('S');
        if($(this).index() === 2)
            $('.order_info_block:nth-child(3) .product_price').html('M');
        if($(this).index() === 3)
            $('.order_info_block:nth-child(3) .product_price').html('L');
        if($(this).index() === 4)
            $('.order_info_block:nth-child(3) .product_price').html('XL');
    });
    $('.chose').click(function(){
        if($(this).index() == 1)
            $('.shirts').addClass('shirt_animate');
        if($(this).index() == 0)
            $('.shirts').removeClass('shirt_animate');
        $('.chose').css({'background-color': 'var(--color1)', 'color': 'var(--color2)'});
        $(this).css({'background-color': 'var(--color2)', 'color': 'var(--color1)'});
   });

   $('.product_shipping').change(function(){
        if($('.product_shipping').val() == 'africa'){
            shipping = 10;
            $('.product_shipping_price').html('10&euro;');
            $('.product_total_price').html(price + shipping +'&euro;');
        }
        if($('.product_shipping').val() == 'asia'){
            shipping = 10;
            $('.product_shipping_price').html('10&euro;');
            $('.product_total_price').html(price + shipping +'&euro;');
        }
        if($('.product_shipping').val() == 'europe'){
            shipping = 0;
            $('.product_shipping_price').html('Free');
            $('.product_total_price').html(price + shipping +'&euro;');
        }
        if($('.product_shipping').val() == 'australia'){
            shipping = 10;
            $('.product_shipping_price').html('10&euro;');
            $('.product_total_price').html(price + shipping +'&euro;');

        }
        if($('.product_shipping').val() == 'north_america'){
            shipping = 5;
            $('.product_shipping_price').html('5&euro;');
            $('.product_total_price').html(price + shipping +'&euro;');
        }
        if($('.product_shipping').val() == 'south_america'){
            shipping = 5;
            $('.product_shipping_price').html('5&euro;');
            $('.product_total_price').html(price + shipping +'&euro;');
        }
    });

    $('.product_quantity').change(function(){
        var value = $('.product_quantity').val();
        if(oldValue<value)
            price += (value - oldValue)*25;
        else if (oldValue>value)
            price -= (oldValue - value)*25;
        $('.product_total_price').html(price + shipping +'&euro;');
        oldValue = value;

    });

    $('.chose_payment').click(function(){
        if($(this).index() === 0){
            selected_payment = [true, false];
        }
        else if($(this).index() === 1){
            selected_payment = [false, true];
        }
        $('.chose_payment').css({'background-color': 'var(--color2)', 'color': 'var(--color3)'});
        $('.chose_payment svg').css({'fill': 'var(--color3)'});
        $(this).find('svg').css({'fill': 'var(--color2)'});
        $(this).css({'background-color': 'var(--color3)', 'color': 'var(--color2)'});
    });


    $('.chose_payment').mouseover(function(){
        $(this).find('svg').css({'fill': 'var(--color2)'});
    });
    $('.chose_payment').mouseleave(function(){
        if($(this).index() === 0 && !selected_payment[0]){
            $(this).find('svg').css({'fill': 'var(--color3)'});
        }
        else if($(this).index() === 1 && !selected_payment[1]){
            $(this).find('svg').css({'fill': 'var(--color3)'});
        }
            
    });


   $('.order').click(function(){

        if(!selected){

            $('.item_description .errors').addClass('errors_width');
            setTimeout(function(){
                    var message = "Please select a size";
                    $('.item_description .error_mess').html(message);
                    $('.item_description .errors').removeClass('errors_width');
                    $('.item_description .errors').addClass('errors_width2');
                    setTimeout(function(){
                        $('.item_description .errors').removeClass('errors_width2');
                    },500);
                },500);

        }
        else {
            $('.item_description .error_mess').css({'opacity': 0});

            $('.order_info').css({'display': 'block'});
            $('.payment_outer').css({'display': 'block'});
            $('html, body').animate({ scrollTop: '580' }, 500);
            delayAni('payment_title', 'slide', 500);
            delayAni('order_main_title', 'slide', 500);
            delayAni('chose_payment', 'slide', 700);
            delayAni('first_name', 'slide', 700);
            delayAni('last_name', 'slide', 900);
            delayAni('region', 'slide', 1100);
            delayAni('address', 'slide', 1300);
            delayAni('building', 'slide', 1500);
            delayAni('city', 'slide', 1700);
            delayAni('postal_code', 'slide', 1900);
            delayAni('chose_payment:first-child', 'slide', 2100);
            delayAni('chose_payment:last-child', 'slide', 2300);
            delayAni('card_number', 'slide', 1500);
            delayAni('expiration_date_block', 'slide', 1700);
            delayAni('cvc_block', 'slide', 1900);
            delayAni('submit_button', 'slide', 2100);

            delayAni('payment_enter_infos .paragraph_block:nth-child(4) .block-hover', 'block', 1400);
            delayAni('payment_outer .paragraph_block:nth-child(6) .block-hover', 'block', 1800);
            delayAni('payment_outer .paragraph_block:nth-child(7) .block-hover', 'block', 2000);
            delayAni('payment_outer .paragraph_block:nth-child(8) .block-hover', 'block', 2200);
            delayAni('payment_enter_infos .paragraph_block:nth-child(9) .block-hover', 'block', 2400);
            delayAni('payment_outer .paragraph_block:nth-child(10) .block-hover', 'block', 2600);
            delayAni('payment_final .paragraph_block .block-hover', 'block', 2200);

        }
    });

    $('.payment_final .paragraph_block:nth-child(4) .first_name_block').click(function(){
        
        message = "";
        messageInfo = "";
        if(!$('.product_shipping').val() || !clearing2){
            clearing2 = false;
            if(!$('.product_shipping').val())
                messageInfo = "Please select a shipping region";
            if(messageInfo == ""){
                clearing2 = true;
            }
            $('.order_info .errors').addClass('errors_width');
            setTimeout(function(){
                $('.order_info .error_mess').html(messageInfo);
                $('.order_info .errors').removeClass('errors_width');
                $('.order_info .errors').addClass('errors_width2');
                setTimeout(function(){
                    $('.order_info .errors').removeClass('errors_width2');
                },500);
                
            },500);
        }
        else
            $('.order_info .errors').css({'opacity': 0});

        if(!$('.first_name').val()){
            message += "first name";
        }    
        if(!$('.last_name').val()){
            if(message != "")
                message += ", ";
            message += "last name";
        }
        if($('.region').val() == null){
            if(message != "")
                message += ", ";
            message += "country";
        }
        if(!$('.address').val()){
            if(message != "")
                message += ", ";
            message += "street name and street number";
        }
        if(!$('.city').val()){
            if(message != "")
                message += ", ";
            message += "city";
        }
        if(!$('.postal_code').val()){
            if(message != "")
                message += ", ";
            message += "zip code";
        }
        if(message !== "" || !clearing){
            clearing = false;
            if(message == "")
                clearing = true;
            $('.payment_enter_infos .errors').addClass('errors_width');
            setTimeout(function(){
                $('.payment_enter_infos .error_mess').html(message);
                $('.payment_enter_infos .errors').removeClass('errors_width');
                $('.payment_enter_infos .errors').addClass('errors_width2');
                setTimeout(function(){
                    $('.payment_enter_infos .errors').removeClass('errors_width2');
                },500);
            },500);
        }
        
    });

    setTimeout(function(){$('.paragraph').css({'opacity': 1});
        delayAni('paragraph .paragraph_block:nth-child(1) span', 'slide', 150);
        delayAni('paragraph .paragraph_block:nth-child(2) span', 'slide', 300);
        delayAni('paragraph .paragraph_block:nth-child(3) span', 'slide', 450);
    },800);

    $('a').click(function(){
        $(".landing_page").addClass('scroll_top');
    });

});



$(document).scroll(function(){
    var x = $(document).scrollTop();
    if(x>120){
        var y = $(document).width();
        if(y<700){
            $('.choice-outer a:first-child .buy').css({'opacity': 0});
            $('.choice-outer a:last-child .buy').css({'opacity': 1});

        }
    }
    else{
        var y = $(document).width();
        if(y<700){
            $('.choice-outer a:first-child .buy').css({'opacity': 1});
            $('.choice-outer a:last-child .buy').css({'opacity': 0});
        }
    }
    if(x>=300){
        delayAni('block:nth-child(1) .paragraph_block span', 'slide', 0);
    }
    if(x>=500){
        delayAni('block:nth-child(2) .paragraph_block span', 'slide', 150);
    }
    if(x>=350){
        delayAni('paragraph2 .paragraph_block:nth-child(1) span', 'slide', 150);
        delayAni('paragraph2 .paragraph_block:nth-child(2) span', 'slide', 300);
        delayAni('paragraph2 .paragraph_block:nth-child(3) span', 'slide', 450);
        $('#pen').addClass('pen_end');
        $('#pen').removeClass('pen_start');
    
        $('.bar1').addClass('bar_end');
        $('.bar1').removeClass('bar_start');
    
        $('.bar2').addClass('bar_end');
        $('.bar2').removeClass('bar_start');
 


        setTimeout(function(){
            $('#circle_pen').addClass('circle_pen_end');
            $('#circle_pen').removeClass('circle_pen_start');
        },200);
      
        setTimeout(function(){
            $('#lightbulbe').addClass('lightbulbe_end');
            $('#cross line').addClass('cross_animate');
            $('#cross-2 line').addClass('cross_animate');
            $('#cross-2 line').css({'animation-delay': '0.5s'});
            $('#cross-3 line').addClass('cross_animate');
            $('#cross-3 line').css({'animation-delay': '1s'});

            $('#lightbulbe path, #lightbulbe line, #lightbulbe circle').addClass('lightbulbe_animate');
            $('#lightbulbe').removeClass('lightbulbe_start');
        },270);

    }
    if(x>=900){
        delayAni('paragraph3 .paragraph_block:nth-child(1) span', 'slide', 150);
        delayAni('paragraph3 .paragraph_block:nth-child(2) span', 'slide', 300);
        delayAni('paragraph3 .paragraph_block:nth-child(3) span', 'slide', 450);
    }
    var scrollPercent = (300 - window.scrollY) / 200;
    if(scrollPercent > 0.05 ){
        $('.paragraph').css({'opacity': scrollPercent});
    }
    else
        $('.paragraph').css({'opacity': 0.05});

    var scrollPercent = (900 - window.scrollY )/200;
    if(scrollPercent > 0.05 ){
        $('.paragraph2').css({'opacity': scrollPercent});
    }
    else
        $('.paragraph2').css({'opacity': 0.05});

});

// delay time before loading new link
function delay (URL) {
    setTimeout( function() { window.location = URL }, 400 );
}

// phone scroll initiation effect
function phoneScrollInit() {
    var x = $(document).width();
    if(x<700){
        $('.choice-outer a:first-child .buy').css({'opacity': 1});
    }
}

// delay animation
function delayAni(elementTo, animation, time) {
    elementTo = '.' + elementTo;
    setTimeout(function(){
        $(elementTo).addClass(animation+'_end');
        $(elementTo).removeClass(animation+'_start');
    }, time);
}

//create paragraphs with length of the width
function about_us_story (target, paragraph_nb1){
    var wordSize = [];
    var sequence;
    var sequenceLength = 0;
    var sequenceFinal = [];
    var space;

    var width = $('body').width();    
    //margin substracted to window width
    width -= 122;
    //calulate size of each word
    sequence = paragraph_nb1.split(" ");
    $("." +target).append("<div class='block'></div>");
    var block = $('.block').length;
    console.log(block);
    $(".block:nth-child(" + (block) + ")").append("<div class='paragraph_block'></div>");

    for(i=0;i<sequence.length; i++){
        $(".block:nth-child(" + (block) + ") .paragraph_block").append( "<span class='slide_start'>" + sequence[i] + "</span>" );
        wordSize[i] = $(".block:nth-child(" + (block) + ") .paragraph_block span").width();
        $(".block:nth-child(" + (block) + ") .paragraph_block span").remove();
    }

    $(".block:nth-child(" + (block) + ") .paragraph_block").append( "<span class='slide_start'>" + "-" + "</span>" );
    
    //size of space
    space = $(".block:nth-child(" + (block) + ") .paragraph_block span").width();
    $(".block:nth-child(" + (block) + ") .paragraph_block span").remove();
    $(".block:nth-child(" + (block) + ") .paragraph_block").remove();
    var count = 0;
    //devide the text to each line
    for(u=0; count<=sequence.length; u++){
        sequenceFinal[u] = "";
        while(sequenceLength<width){
            sequenceLength += wordSize[count] + space;
            if(sequenceLength<width){
                sequenceFinal[u] += sequence[count] + " ";
            }
            count ++;
        }

        console.log(sequenceFinal[u]);
        $(".block:nth-child(" + (block) + ")").append("<div class='paragraph_block'></div>");
        $(".block:nth-child(" + (block) + ") .paragraph_block:nth-child(" + (u+1) + ")").append( "<span class='slide_start'>" + sequenceFinal[u] + "</span>" );
        sequenceLength = 0;
    }
}
