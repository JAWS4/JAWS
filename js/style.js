$(function () {
    let sec = 0;
    let min = 0;
    let hour = 0;

    let timer;

    window.onload = function () {
        $('.q0').show();

        // 00:00:00から開始
        sec = 0;
        min = 0;
        hour = 0;
        $('#clock').html('00:00:00');
        timer = setInterval(countup, 1000);

        $(this).prop('disabled', true);
        $('#stop,#reset').prop('disabled', false);
    };

    // ストップ
    $('#stop').click(function () {
        // 一時停止
        clearInterval(timer);

        $(this).prop('disabled', true);
        $('#restart').prop('disabled', false);
    });

    // リスタート
    $('#restart').click(function () {
        // 一時停止から再開
        timer = setInterval(countup, 1000);

        $(this).prop('disabled', true);
        $('#stop').prop('disabled', false);
    });

    // リセット
    $('#reset').click(function () {
        // 初期状態
        sec = 0;
        min = 0;
        hour = 0;
        $('#clock').html('00:00:00');
        clearInterval(timer);

        $('#stop,#restart,#reset').prop('disabled', true);
        $('#start').prop('disabled', false);
    });

    /**
    * カウントアップ
    */
    function countup() {
        sec += 1;

        if (sec > 59) {
            sec = 0;
            min += 1;
        }

        if (min > 59) {
            min = 0;
            hour += 1;
        }

        // 0埋め
        sec_number = ('0' + sec).slice(-2);
        min_number = ('0' + min).slice(-2);
        hour_number = ('0' + hour).slice(-2);

        $('#clock, .time2').html(hour_number + ':' + min_number + ':' + sec_number);
    };

    const mediaElemSafe = document.getElementById('movie_safe');
    const mediaElemOut = document.getElementById('movie_out');
    // const audioElem = document.getElementById('end_audio');

    function miss() {
        // 指定要素の前に挿入
        $('main').hide();
        $('#movie').before('<video id="movie2" src="movie/safe.mp4" preload="auto" autoplay></video>');
        $('#movie').remove();
        $('#movie2').on('ended', function () {
            $('#safe').fadeIn(3000);
            // audioElem.play();
        });
    };


    let userA = [];
    let userB = [];
    let result = [];

    // 配列にpush
    $('.yesA').on('click', function () {
        userA.push(0);
        // console.log(userA);
    });
    $('.noA').on('click', function () {
        userA.push(1);
        // console.log(userA);
    });

    $('.yesB').on('click', function () {
        userB.push(0);
        // console.log(userB);
    });
    $('.noB').on('click', function () {
        userB.push(1);
        // console.log(userB);
    });


    let a = 0;
    let b = 0;
    $('.yesA, .noA').on('click', function () {
        a++;
        check(a, b);
        // console.log(userA);
        // console.log(userB);
        // console.log(a);
    });

    $('.yesB, .noB').on('click', function () {
        b++;
        check(a, b);
        // console.log(userA);
        // console.log(userB);
    });

    function check(a, b) {
        if (a == 1 && b == 1) {
            $('.q0').hide();
            $('.q1').fadeIn(2000);
            // console.log(a, b);
            // match();
            // console.log(result);
        };
        if (a == 2 && b == 2) {
            $('.q1').hide();
            $('.q2').fadeIn(2000);
            // console.log(a, b);
            // match();
            // console.log(result);
        };
        if (a == 3 && b == 3) {
            $('.q2').hide();
            // $('.q3').fadeIn(2000);
            // console.log(a,b)
            match();
            // console.log(result);
            // $('#movie_safe').show();
            // mediaElemSafe.play();
            // $('#movie_safe').on('ended', function () {
            //     $('#movie_safe').hide();
            //     $('#safe').show();

            // タイマーストップ
            clearInterval(timer);
            $(this).prop('disabled', true);
            $('#restart').prop('disabled', false);

            let sum = function (result) {
                let sum = 0;
                result.forEach(function (elm) {
                    sum += elm;
                });
                return sum;
            };
            console.log(sum(result));

            if (sum(result) == 0) {
                $('#movie_safe').show();
                mediaElemSafe.play();
                $('#movie_safe').on('ended', function () {
                    $('#movie_safe').hide();
                    $('.time').hide();
                    $('#safe').show();
                });
            } else {
                $('#movie_out').show();
                mediaElemOut.play();
                $('#movie_out').on('ended', function () {
                    $('#movie_out').hide();
                    $('.time').hide();
                    $('#out').show();

                });
            }
        };
        if (a == 4 && b == 4) {
            $('.q3').hide();
            $('.q4').fadeIn(2000);
            match();
        };
        if (a == 5 && b == 5) {
            $('.q4').hide();
            $('.q5').fadeIn(2000);
            // match();
        };
    };


    function match() {

        // for (let i = 0; i < userA.length; i++){
        //     if (userA[i] == userB[i]) {
        //         result.push(0);
        //         console.log(result);
        //     } else {
        //         result.push(1);
        //         // console.log(result);
        //     };
        // };

        if (userA[0] == userB[0]) {
            result.push(0);
            // console.log(result);
        } else {
            result.push(1);
            // console.log(result);
        };

        if (userA[1] == userB[1]) {
            result.push(0);
            // console.log(result);
        } else {
            result.push(1);
            // console.log(result);
        };

        if (userA[2] == userB[2]) {
            result.push(0);
            console.log(result);
            // console.log(userA);
            // console.log(userB);
        } else {
            result.push(1);
            console.log(result);
        };
        // if (userA[3] == userB[3]) {
        //     result.push(0);
        //     console.log(result);
        // } else {
        //     result.push(1);
        //     console.log(result);
        // };
        // if (userA[4] == userB[4]) {
        //     result.push(0);
        //     console.log(result);
        // } else {
        //     result.push(1);
        //     console.log(result);
        // };
        // if (userA[4] == userB[4]) {
        //     result.push(0);
        //     console.log(result);
        // } else {
        //     result.push(1);
        //     console.log(result);
        // };
    };

});