$(function () {
    var $li = $('.slide_list li');
    var $point_lens = $li.length;
    var $points_con = $(".points");

    var $nowli = 0; //要运动过来得li索引 
    var $prevli = 0; //要离开得li得索引

    var $prev = $(".prev");
    var $next = $(".next");


    var $timer = null;
    var $ismove = false;


    for (var i = 0; i < $point_lens; i++) {
        var $newli = $("<li>");
        if (i == 0) {
            $newli.addClass('active');
        }

        $newli.appendTo($points_con);

    }

    $li.not(':first').css({
        'left': 760
    });

    //此时小圆点被创建 可以获取出来
    var $points = $('.points li');
    $points.click(function () {
        $nowli = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');

        move();
    });

    //向前得按钮点击切换幻灯片
    $prev.click(function () {
        if ($ismove) {
            return;
        }
        $ismove = true;
        $nowli--;
        move();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    });

    //向后得按钮点击切换幻灯片
    $next.click(function () {
        if ($ismove) {
            return;
        }
        $ismove = true;
        $nowli++;
        move();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    });

    $timer = setInterva(autoplay, 3000);

    var $slide = $(".slide");
    $slide.mouseenter(function () {
        clearInterval($timer);
    });

    $slide.mouseleave(function () {
        $timer = setInterva(autoplay, 3000);
    });

    function autoplay() {
        $nowli++;
        move();
        $points.eq($nowli).addClass('active').siblings().removeClass('active');
    }


    function move() {

        //第一张往前  
        if ($nowli < 0) {
            $nowli = $point_lens - 1;
            $prevli = 0;

            $li.eq($nowli).css({
                'left': 760
            });
            $li.eq($nowli).css({
                'left': 0
            });
            $li.eq($prevli).animate({
                'left': -760
            }, function () {
                $ismove = false;
            });
            $prevli = $nowli;
            return;

        }
        //最后一张幻灯片往后的时候
        if ($nowli > $point_lens - 1) {
            $nowli = 0;
            $prevli = $point_lens - 1;
            $li.eq($nowli).css({
                'left': 760
            });
            $li.eq($nowli).css({
                'left': 0
            });
            $li.eq($prevli).animate({
                'left': -760
            }, function () {
                $ismove = false;
            });
            $prevli = $nowli;
            return;
        }


        if ($nowli == $prevli) {
            return;
        }
        if ($nowli > $prevli) {
            $li.eq($nowli).css({
                'left': 760
            });
            $li.eq($nowli).css({
                'left': 0
            });

            $li.eq($prevli).animate({
                'left': -760
            });
            $prevli = $nowli;
        } else {
            $li.eq($nowli).css({
                'left': -760
            });
            $li.eq($nowli).css({
                'left': 0
            });
            $li.eq($prevli).animate({
                'left': 760
            });
            $prevli = $nowli;

        }
    }





});