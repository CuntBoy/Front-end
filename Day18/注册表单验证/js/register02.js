$(function () {
    var $user_name = $('#user_name');

    
    $('#user_name').click(function () {
        $(this).next().hide();

    });

    /* 用户名输入框失去焦点的时候 */
    $('#user_name').blur(function () {
        check_username();

    });


    function check_username() {
        var val = $user_name.val();
        var reUserName = /^\w{6,20}$/;

        if (val == '') {
            $user_name.next().html("用户明不能为空");
            $user_name.next().show();
            return;
        }

        if (reUserName.test(val)) {
            $user_name.next().hide();
        } else {
            $user_name.next().html("用户是6-20位的数字,字母或下划线");
            $user_name.next().show();
        }

    }



});