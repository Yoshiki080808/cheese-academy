// jsを記述する際はここに記載していく

// テキストアニメーションの処理
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);


// スタート画面の処理
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});


// $('.about__pics').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1
//   });


// フワッとなるやつの実装
function fadeAnime(){
	$('.content').each(function(){ //fadeInUpTriggerというクラス名が
		var elemPos = $(this).offset().top-50; //要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeUp');
		// 画面内に入ったらfadeInというクラス名を追記
		}else{
		$(this).removeClass('fadeUp');
		// 画面外に出たらfadeInというクラス名を外す
		}
		});
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

//   ナビのリンクをクリックすると、スクロールして移動
$('.navis a[href*="#"]').click(function () {
var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
var pos = $(elmHash).offset().top;  //idの上部の距離を取得
$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
return false;
});