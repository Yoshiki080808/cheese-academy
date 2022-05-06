

if (window.matchMedia('(max-width: 670px)').matches) {
    // ウィンドウサイズ768px以下のときの処理
    console.log('fvsfgs');
    
    $('.about__pics').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });


    $(".openbtn1").click(function () {//ボタンがクリックされたら
      $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
      });
      
      $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
      });

  } else {
    // それ以外の処理
    console.log('dfsfa');
    
    $('.about__pics').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
  }

  const mediaQuery = window.matchMedia('(max-width: 670px)');
 
  // ページが読み込まれた時に実行
  handle(mediaQuery);
   
  // ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
  mediaQuery.addListener(handle);
   
  function handle(mm) {
    if (mm.matches) {
      // ウィンドウサイズ768px以下のときの処理
    } else {
      // それ以外の処理
    }
  }
  

// 試してまぁまぁだったけど、初期化する処理がわからない
// window.addEventListener('DOMContentLoaded', function(){
//     window.addEventListener('resize', function(){
  
//       // 〜767pxまで
//       if( window.matchMedia("screen and (max-width:767px)").matches ) {
//         console.log("Smartphone");



//       }
      
//       // 768px〜1000pxまで
//       if( window.matchMedia("screen and (min-width:768px) and (max-width:1000px)").matches ) {
//         console.log("Tablet");
//       }
      
//       // 1001px〜
//       if( window.matchMedia("screen and (min-width:1001px)").matches ) {
//         console.log("PC");
//       }
  
//     });
//   });


// 試したがダメだったやつ２
//   function switchByWidth(){
//     if (window.matchMedia('(max-width: 767px)').matches) {
//         //スマホ処理
//         console.log("Smartphone");

//         $('.about__pics').slick({
//             infinite: true,
//             slidesToShow: 3,
//             slidesToScroll: 1
//         });

//     } else if (window.matchMedia('(min-width:768px)').matches) {
//         //PC処理
//         console.log("PC");
//     }
// }

// //ロードとリサイズの両方で同じ処理を付与する
// window.onload = switchByWidth;
// window.onresize = switchByWidth;