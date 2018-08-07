$(document).ready(() => {




    // getting array of content elements
    let content_items = document.getElementsByClassName('content');
    // creating an array to store heights
    let content_heights = [];
    
    content_heights = [];
    for (let i = 0; i < 4; i++) {
        content_heights.push(content_items[i].clientHeight)
    }
    // console.log(content_heights);
    let mobile = new Boolean();




    // creating recallable function
    let area = () => {
        window_width = window.innerWidth;
        window_height = window.innerHeight;
        // header_height = document.getElementById('header').clientHeight;
        header_height = window.innerHeight;
        $('header').css('height', header_height);
        nav_height = document.getElementById('nav').clientHeight;
        if (window_width >= 600) {
            // $('#container').css('height', window_height - header_height);
            // $('#main').css('height', window_height*4 - header_height - nav_height);
            $('.sections').css('height', window_height - nav_height);
            $('.content').css('height', 'auto');
            mobile = false;
        } else {
            // $('#container').css('height', 'auto');
            // $('#main').css('height', 'auto');
            $('.sections').css('height', 'auto');
            $('.content').css('height', '76.4px');
            mobile = true;
        }
    }

    // calls the funtion initially
    area();
    
    // call funtion on resize
    $(window).resize(() => {
        area();
    })

    // navigation bar
    let burger = document.getElementById("burger");
    burger.name = "closed";

    $("#burger").click(() => {
        if (burger.name == "closed") {

            $("#uList").animate({height:"250px"}, 900)
            $('#one').css('transform', 'translate(5px, 10px) rotate(-45deg)')
            $('#three').css('transform', 'translate(-20px, 0px) rotate(45deg)')
            
            burger.name = "open";

        } else {

            $("#uList").animate({height:"0"}, 900)
            $('#one').css('transform', 'translate(5px, 10px) rotate(45deg)')
            $('#three').css('transform', 'translate(-20px, 0px) rotate(-45deg)')
            burger.name = "closed";
        }
    });





    if (mobile == true) {
        $('h1').on('click', function () {
        
            if ($(this).closest('.content').attr('name') == 'closed') {
                $(this).closest('.content').animate({height: content_heights[$(this).closest('.content').index('.content')]}, 700);
                $(this).closest('.content').attr('name', 'open');
            } else {
                $(this).closest('.content').animate({height: "76.4px"}, 700);
                $(this).closest('.content').attr('name', 'closed');
            }
            
        })
    }




    /*--------------------------------------------*/
    /*----------------backToTop-----------------*/
    /*--------------------------------------------*/


    $(window).scroll(() => {
        if (window.pageYOffset >= 1000) {
            $('#backToTop').css('tranform', 'translateX(-70px)');
            $('#backToTop').css('opacity', '1');
        } else {
            $('#backToTop').css('tranform', 'translateX(0px)');
        }
    })

    $('#backToTop').click(() => {
        $('html, body').animate({scrollTop:0}, 800);
    })


    // action for slide content
    for (let i = 0; i < 4; i++) {
        $('#link' + i).on('click', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({scrollTop: $(document).height()}, 800);
            $('#main').animate({marginLeft: (i*-100) + '%'}, 500);
        })
    }

})