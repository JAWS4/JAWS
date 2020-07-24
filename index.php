<?php


$output = "";
$array = array(
  'Q1 電話の履歴３日分見せることはできますか？',
  'Q2 ？',
  'Q3 あなたは△△△△△△△△△△△△は良いと思いますか？',
  'Q4 あなたは△△△△△△△△△△△△は良いと思いますか？',
);
// var_dump(count($array));
// exit();
for ($i = 0; $i < count($array); $i++) {
  $output .=
    "<div class='main q{$i}' style='display:none'>
    <div class='top'>
    {$array[$i]}
    </div>
      <div class='bottom'>
        <div class='userA userA{$i}'>
          <div class='yesA yesA{$i}'>
            はい
          </div>
          <div class='noA noA{$i}'>
            いいえ
          </div>
        </div>
        <div class='userB userB{$i}'>
          <div class='yesB yesB{$i}'>
              はい
          </div>
          <div class='noB noB{$i}'>
            いいえ
          </div>
        </div>
      </div>
  </div>";
}

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JAWS</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/jquery-3.5.1.min.js"></script>
  <script src="js/style.js"></script>
  <script src="js/arr.js"></script>
  <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
  <!-- <link rel="stylesheet" type="text/css" href="css/reset.css" />
  <link rel="stylesheet" type="text/css" href="css/sanitize.css" /> -->
</head>

<body>
  <div class="time">
    <div id="clock">00:00:00</div>
    <form>
      <input type="hidden" id="start" value="Start">
      <input type="hidden" id="stop" value="Stop" disabled>
      <input type="hidden" id="restart" value="Restart" disabled>
      <input type="hidden" id="reset" value="Reset" disabled>
    </form>
  </div>


  <!-- メイン動画 -->
  <video id="movie_safe" src="movie/safe.mp4" preload="auto"></video>
  <video id="movie_out" src="movie/out.mp4" preload="auto"></video>

  <div id="safe">
    <div class="safe">セーフ</div>
    <img class="gameover_game" src="img/safe.png" alt="">
    <div class="safe_time">所要時間は<span class="time2"></span>です。</div>
  </div>
  <div id="out">
    <div class="out">アウト</div>
    <img class="gameover_game" src="img/out.png" alt="">
    <div class="out_time">所要時間は<span class="time2"></span>です。</div>
  </div>

  <div class="main q0">
    <div class="top">
      Q0 あなたは◯◯◯◯◯◯◯◯◯◯◯◯は良いと思いますか？
    </div>
    <div class="bottom">
      <div class="userA">
        <div class="yesA">
          はい
        </div>
        <div class="noA">
          いいえ
        </div>
      </div>
      <div class="userB">
        <div class="yesB">
          はい
        </div>
        <div class="noB">
          いいえ
        </div>
      </div>
    </div>
  </div>
  <div class="main q1">
    <div class="top">
      Q2 あなたは×××××××××××は良いと思いますか？
    </div>
    <div class="bottom">
      <div class="userA">
        <div class="yesA">
          はい
        </div>
        <div class="noA">
          いいえ
        </div>
      </div>
      <div class="userB">
        <div class="yesB">
          はい
        </div>
        <div class="noB">
          いいえ
        </div>
      </div>
    </div>
  </div>

  <div class="main q2">
    <div class="top">
      Q1 あなたは◯◯◯◯◯◯◯◯◯◯◯◯は良いと思いますか？
    </div>
    <div class="bottom">
      <div class="userA">
        <div class="yesA">
          はい
        </div>
        <div class="noA">
          いいえ
        </div>
      </div>
      <div class="userB">
        <div class="yesB">
          はい
        </div>
        <div class="noB">
          いいえ
        </div>
      </div>
    </div>
  </div>
  <style>
    #movie_safe,
    #movie_out {
      display: none;
      width: 100%;
    }

    #safe,
    #out {
      padding-top: 100px;
      display: none;
      text-align: center;
    }
  </style>

</body>

</html>