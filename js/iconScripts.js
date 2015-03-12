/**
 * Created by Admin on 2/7/15.
 */

function getBlockSize(){
    var BS = 6;
   var PW = $(window).width();
    if(PW < 800 && PW > 500){
        BS = 4;
    }else if(PW < 500){
        BS = 2;
    }
    return BS;
}

function matrixToArray(str) {
    return str.match(/(-?[0-9\.]+)/g);
}






$(document).ready(function () {
    console.log("iconScripts Works");

    /*var videoBG = $('.welcomeBlock').videoBG(    {
        mp4:'http://icon-ad.com/video/lamp.mp4',
        ogv:'http://icon-ad.com/video/lamp.mp4',
        webm:'http://icon-ad.com/video/lamp.mp4',
        poster:'tunnel_animation.jpg',
        scale:true,
        loop:true,
        zIndex:0

    });*/


/*----------------------------------  [Contact us]  -----------------------------------------------*/

    $("#submit_btn").click(function() {

        var proceed = true;
        //simple validation at client's end
        //loop through each field and we simply change border color to red for invalid fields
        $("#contact_form input[required=true], #contact_form textarea[required=true]").each(function(){
            $(this).css('border-color','');
            if(!$.trim($(this).val())){ //if this field is empty
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
            //check invalid email
            var email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if($(this).attr("type")=="email" && !email_reg.test($.trim($(this).val()))){
                $(this).css('border-color','red'); //change border color to red
                proceed = false; //set do not proceed flag
            }
        });

        if(proceed) //everything looks good! proceed...
        {
            //get input field values data to be sent to server
            post_data = {
                'user_name'		: $('input[name=name]').val(),
                'user_email'	: $('input[name=email]').val(),
                'country_code'	: $('input[name=phone1]').val(),
                'phone_number'	: $('input[name=phone2]').val(),
                'subject'		: $('select[name=subject]').val(),
                'msg'			: $('textarea[name=message]').val()
            };

            //Ajax post data to server
            $.post('http://icon-ad.com/scripts/contact_me.php', post_data, function(response){
                if(response.type == 'error'){ //load json data from server and output message
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    output = '<div class="success">'+response.text+'</div>';
                    //reset values in all input fields
                    $("#contact_form  input[required=true], #contact_form textarea[required=true]").val('');
                    $("#contact_form #contact_body").slideUp(); //hide form after success
                }
                $("#contact_form #contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

/*----------------------------------  [Contact us End]  -----------------------------------------------*/

/*----------------------------------  [WORKHEIGHT]  -----------------------------------------------*/

    setBlockSize();

/*----------------------------------  [WORKHEIGHT End]  -----------------------------------------------*/


/*----------------------------------  [StickUp]  -----------------------------------------------*/


$(window).scroll(function(e){



    if($(window).scrollTop() === 0)
    {
        if($('.MainHeader').hasClass('floatMenu'))
        {
            $('.MainHeader').removeClass('floatMenu');
        }
    }else if($(window).scrollTop() > 0)
    {
        if($('.MainHeader').hasClass('floatMenu') !== true )
        {
            $('.MainHeader').addClass('floatMenu');
        }
    }
});


    $('.scrollBtn').bind('click',function(e) {
        if($('.navbar-collapse').hasClass('in'))
        {
            $('.navbar-collapse').removeClass('in');
        }
        $('body').animate({
            scrollTop: $('#' + $(this).attr('target')).offset().top - ($('.MainHeader').height())
        }, 1000);
        e.preventDefault();
        console.log($('#' + $(this).attr('target')));
    });

    /*var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });

  controller.addTween('#content', TweenMax.from($('.welcomeBlock h1'), 0.5, {css:{opacity:0,marginLeft:2000}}));*/

    /*----------------------------------  [StickUp End]  -----------------------------------------------*/

    /*----------------------------------  [ANIMATION  -----------------------------------------------*/
    //{onComplete:initScrollAnimations}

   /* var controller = $.superscrollorama();
    controller.addTween('.whoWeAre', TweenMax.from( $('.whoWeAre .mainHeading'),0.75, {css:{marginTop:'250px',letterSpacing:200,opacity:0}, ease:Quad.easeOut}));

    controller.addTween('.whoWeAre', TweenMax.from( $('.services'),1, {css:{paddingLeft:'0px',fontSize:'10px',opacity:0}, ease:Back.easeOut}));


    $('.serIcon svg').each(function() {
        controller.addTween('.whoWeAre', TweenMax.from( this, 1.5, {delay:Math.random()*0.6,css:{'max-height':'0px','fill':'black'}, ease:Bounce.easeOut}));
    });

    $('.service-section .mainHeading').lettering();

    $('.service-section .mainHeading span').each(function() {
        controller.addTween('.whoWeAre', TweenMax.from( this, 1.5, {delay:Math.random()*0.6,css:{'opacity':'0'}, ease:Bounce.easeOut}));
    });


$('.threeValues .col-xs-12').each(function(i){
    controller.addTween('.textValues', TweenMax.from( this, 1.5 * i, {delay:Math.random()*0.6,css:{'opacity':'0','margin-top':100 * i+'px','font-size':'0px'}, ease:Expo.easeOut}));
});




        controller.addTween('.clientsBlock', TweenMax.from( $('.clientsBlock ul'),1.5, {delay:0.5,css:{'opacity':'0','margin-top':'35px','font-size':'0px'}, ease:Quint.easeOut}));




        controller.addTween('.wwwIntro', TweenMax.from( $('.wwwIntro h1'),1.5, {delay:0.5,css:{'opacity':'0','font-size':'0px'}, ease:Quint.easeOut}));


    $('.phases .col-lg-3').each(function(i){

        controller.addTween('.phases', TweenMax.from( this,1.3, {delay:0.6,css:{'opacity':'0','margin-top':50 * i+'px','font-size':'0px'}, ease:Quint.easeOut}));
    });

    $('.phases .col-lg-3 h4').each(function(i){

        controller.addTween('.phases', TweenMax.from( this,0.1 * i, {delay:0.4,css:{'opacity':'0','margin-top':20 * i+'px','font-size':'0px'}, ease:Quint.easeOut}));
    });

    $('.phases .col-lg-3 h3').each(function(i){

        controller.addTween('.phases', TweenMax.from( this,0.1 * i, {delay:0.4,css:{'opacity':'0','margin-top':20 * i+'px','font-size':'0px'}, ease:Quint.easeOut}));
    });

    $('.teamMembers h1').lettering();

    $('.teamMembers h1 span').each(function(i){

        controller.addTween('.teamMembers', TweenMax.from( this,0.1 * i, {delay:Math.random()*0.8,css:{'opacity':'0','font-size':'80px'}, ease:Quint.easeOut}));
    });

    controller.addTween('.teamMembers', TweenMax.from( $('.teamMembers > p'),1.5, {css:{'opacity':'0','margin-top':'40px'}, ease:Quint.easeOut}));



    $('.teamMembers ul li').each(function(i){

        controller.addTween('.teamMembers', TweenMax.from( this,1.3, {delay:Math.random()*0.8,css:{'opacity':'0','margin-top':20 * i+'px','font-size':'0px'}, ease:Quint.easeOut}));
    });*/







    var pinDur = 2500;
    var pinAnimations = new TimelineLite();

   /*pinAnimations
        .append(TweenMax.to($('#whoWeAre'), 0.5, {css:{top:"0px"}}))
    .append(TweenMax.to($('#valuesClients'), 0.8, {css:{top:"0px"}}));*/

   /* controller.pin($('.whoWeAre'), pinDur, {
        anim:pinAnimations

    });*/


    /*controller.addTween(
        '.whoWeAre',
        (new TimelineLite())
            .append([
                TweenMax.fromTo($('.textAbout'), 1,
                    {css:{top: 200}, immediateRender:true},
                    {css:{top: -600}}),
                TweenMax.fromTo($('.block.services'), 1,
                    {css:{top: 500}, immediateRender:true},
                    {css:{top: -1250}})
            ]),
        1000 // scroll duration of tween
    );*/



    /*
    Blocks:
    #whoWeAre
    #valuesClients
    #theWayWeWork
    #teamMembers
    #map
    footer
     */


    /*----------------------------------  [ANIMATION END]  -----------------------------------------------*/




});//endy ready function

function remain(elm){
    var n = $(window).height() - elm.height();
    var s = (-n) + "px";
    return s;
}

function setBlockSize()
{
    var blocks = $('.grid li');
    var w = $(window).width();
    var blockSize;
        if(w >= 800){
            blockSize = (($(window).width() -16) / 8);
        }else if(w < 800 && w >= 600){
            blockSize = (($(window).width() -12) / 6);
        }else if (w < 600 && w >= 400){
            blockSize = (($(window).width() -8) / 4);
        }else if(w < 400){
            blockSize = (($(window).width() -6) / 3);
        }




    $.each(blocks,function(i,v){
        var block = $(blocks[i]);
        block.width(blockSize);
        block.css('min-height',blockSize+'px');
        block.css('height',blockSize+'px');
        block.css('max-height',blockSize+'px');


    });
   $("#grid").masonry();

    $('#whoWeAre').css('top',($('.welcome').outerHeight(true) + 169 )+'px');
    $('#valuesClients').css('top',($('.welcome').outerHeight(true) + 169 )+($('#whoWeAre').outerHeight(true))+'px');
    $('#theWayWeWork').css('top',($('.welcome').outerHeight(true) + 169 )+($('#whoWeAre').outerHeight(true))+($('#valuesClients').outerHeight(true))+'px');
    $('#teamMembers').css('top',($('.welcome').outerHeight(true) + 169 )+($('#whoWeAre').outerHeight(true))+($('#valuesClients').outerHeight(true))+($('#theWayWeWork').outerHeight(true))+'px');
    $('#map').css('top',($('.welcome').outerHeight(true) + 169 )+($('#whoWeAre').outerHeight(true))+($('#valuesClients').outerHeight(true))+($('#theWayWeWork').outerHeight(true))+($('#teamMembers').outerHeight(true))+'px');
    //$('footer').css('top',($('.welcome').outerHeight(true) + 169 )+($('#whoWeAre').outerHeight(true))+($('#valuesClients').outerHeight(true))+($('#theWayWeWork').outerHeight(true))+($('#teamMembers').outerHeight(true))+($('#map').outerHeight(true))+'px');

}





$(window).resize(function(){

    setBlockSize();

});

$(window).load(function(){
    //$('#content').height(6000);

    setBlockSize();
    sliding();



});

function sliding(){

    var controller = $.superscrollorama();
    controller.addTween(5,TweenMax.to($('.header-bg'), 1.5, {css:{opacity: 1}, immediateRender:true, ease:Quad.easeOut}),1300);
    controller.addTween(5,TweenMax.to($('.welcomeBlock hgroup h1'),0.2, {css:{color: "white"}, immediateRender:true, ease:Quad.easeOut}),200);
    controller.addTween(5,TweenMax.to($('.welcomeBlock hgroup p'), 0.2, {css:{color: "white"}, immediateRender:true, ease:Quad.easeOut}),200);
    controller.addTween($(window).height()* 0.5,TweenMax.to($('#whoWeAre'), 3, {css:{top: -$('#whoWeAre').outerHeight(true)}, immediateRender:true, ease:Quad.easeOut}),1500);
    controller.addTween($(window).height()* 0.7,TweenMax.to($('#valuesClients'), 3, {css:{top:-$('#valuesClients').outerHeight(true)}, immediateRender:true, ease:Quad.easeOut}),1400);
    controller.addTween($(window).height()* 1,TweenMax.to($('#theWayWeWork'), 3, {css:{top:-$('#theWayWeWork').outerHeight(true)}, immediateRender:true, ease:Quad.easeOut}),1300);
    controller.addTween($(window).height()* 1.3,TweenMax.to($('#teamMembers'), 3, {css:{top:-$('#teamMembers').outerHeight(true)}, immediateRender:true, ease:Quad.easeOut}),1200);
    controller.addTween($(window).height()* 1.4,TweenMax.to($('#map'), 3, {css:{top:-($('#map').outerHeight(true)/2)-60}, immediateRender:true, ease:Quad.easeOut}),1100);
    //controller.addTween(2000,TweenMax.to($('footer'), 2.3, {css:{top:-$('footer').outerHeight(true)}, immediateRender:true, ease:Quad.easeOut}),1000);

    controller.addTween('.whoWeAre', TweenMax.from( $('.whoWeAre .mainHeading'),0.75, {css:{marginTop:'250px',letterSpacing:200,opacity:0}, ease:Quad.easeOut}));

    controller.addTween('.whoWeAre', TweenMax.from( $('.services'),1, {css:{paddingLeft:'0px',fontSize:'10px',opacity:0}, ease:Back.easeOut}));


    $('.serIcon svg').each(function() {
        controller.addTween('.whoWeAre', TweenMax.from( this, 1.5, {delay:Math.random()*0.6,css:{'max-height':'0px','fill':'black'}, ease:Bounce.easeOut}));
    });

    $('.service-section .mainHeading').lettering();

    $('.service-section .mainHeading span').each(function() {
        controller.addTween('.whoWeAre', TweenMax.from( this, 1.5, {delay:Math.random()*0.6,css:{'opacity':'0'}, ease:Bounce.easeOut}));
    });


    $('.threeValues .col-xs-12').each(function(i){
        controller.addTween('.textValues', TweenMax.from( this, 1.5 * i, {delay:Math.random()*0.6,css:{'opacity':'0','margin-top':100 * i+'px','font-size':'0px'}, ease:Expo.easeOut}));
    });




    controller.addTween('.clientsBlock', TweenMax.from( $('.clientsBlock ul'),1.5, {delay:0.5,css:{'opacity':'0','margin-top':'35px','font-size':'0px'}, ease:Quint.easeOut}));




   // controller.addTween('.wwwIntro', TweenMax.from( $('.wwwIntro h1'),1.5, {css:{'opacity':'0','font-size':'0px'}, ease:Quint.easeOut}));
}


