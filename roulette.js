$(function () {
   // 変数の定義
   let roulette = ["C", "B", "A"];
   let key1 = 0;
   let max_len = roulette.length - 1;
   // let randStart;
   let speed = 100; //シャッフルスピード

   //文字シャッフル関数
   const randShuffle01 = function () {
      if (key1 > max_len) key1 = 0;
      $(".rand_name01").text(roulette[key1]);
      key1++;
   }
   //文字シャッフル開始
   const randStart01 = setInterval(randShuffle01, speed);

   $("#stop01").click(function () {
      let rand = Math.floor(Math.random() * 3);
      $(".rand_name01").text(roulette[rand]);
      clearInterval(randStart01);
      // すすむをクリック
      // $(".susumu02").click(function () {
      //    $(".story02").hide();
      //    if (rand == 2) {
      //       point += 2;
      //       $(".story00").fadeIn(1500);
      //    } else if (rand == 1) {
      //       point += 1;
      //       $(".story03").fadeIn(1500);
      //    } else {
      //       point = 0;
      //       $(".story03").fadeIn(1500);
      //    };
      // });
   });

   

});