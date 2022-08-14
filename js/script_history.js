const TEXT_WHEN = 
[ "2018/08 - 2019/06"
, "2015/04 - 2018/03"
, "1994/05 - 2015/03"
, "2019/09 - 2022/08"
, "2022/07 - 2022/08" 
, "2022/07 - 2022/08"
, "2020/11 - 2022/06"
, "2020/04 - 2020/10"
, "2019/10 - 2020/03"
, "2019/09 - 2019/09"];
const TEXT_TITLE = 
[ "透析装置の生産技術"
, "大阪の大学に進学"
, "鹿児島県出身"
, "フロントエンドの学習"
, "Gitについて"
, "スマートウォッチの開発" 
, "画像処理装置の開発"
, "保険プランの帳票出力ツールの開発"
, "加盟店管理ツールの改修"
, "機器のキッティング、インフラ"];

const TEXT_CONTENT = 
[ "透析装置の生産技術として就業<br>他部署との折衝を行いながらプロジェクトをリーダー補佐として進めた"
, "大阪工業大学に進学<br>ソフトウェアの知識深くを学び、機械・電気の分野についても学習した"
, "鹿児島県志布志市に誕生<br>普通科の高校を卒業後、浪人のための予備校まで鹿児島で過ごす"
, "フロントエンドの学習を続けており、長く行っている<br>フロントエンドの仕事に就業できるようになることが目標ことが目標"
, "チーム開発の経験あり<br>commit、pull、pull requestを行い、コンフリクトの解消まで行う"
, "Cを用いたスマートウォッチの開発<br>アナログUIの表示、画面遷移の修正を行う" 
, "C++を用いた画像処理アプリの開発<br>検査をするためのカメラの選定からソフト作成まで行う<br>場合によってはシーケンス制御も行った"
, "ExcelVBAを用いた開発ツールの開発<br>保険のプランを選択し帳票として出力する<br>詳細設計からテスト工程まで行った"
, "AccessVBAを用いた管理ツールの改修<br>営業が取得するデータを一括でデータベース管理を行った"
, "機器のキッティングや通信確認業務<br>仕様通りに通信が行われているかの通信確認"];

const ANGLE_BEGIN_POS_ARRAY = [240 , 270, 300, 330, 360, 390, 420];
const ANGLE_END_POS_ARRAY   = [270 , 300, 330, 360, 390, 420, 450];
var PosArray        = [1 ,2 , 3, 4, 5, 6, 7, 8, 9, 10];
var AngleArray      = [0 ,0 , 0, 0, 0, 0, 0];
var roundElement    = document.getElementById('round');
var roundClientRect = roundElement.getBoundingClientRect();
var roundWidth      = getComputedStyle(roundElement).width;
var roundTop        = getComputedStyle(roundElement).top;
var roundLeft       = getComputedStyle(roundElement).left;



initAngleData();
let cntArray = 0;
const MOVE_ANGLE_INIT = setInterval(function() {
  circumference(PosArray[cntArray], AngleArray[cntArray]);
  if(AngleArray[cntArray] < ANGLE_END_POS_ARRAY[cntArray]){
    AngleArray[cntArray]++;
  }else{
    cntArray++;
    if(cntArray == ANGLE_BEGIN_POS_ARRAY.length){clearInterval(MOVE_ANGLE_INIT)};
  }
}, 2);
swapArray();
changeText();
initAngleData();
changeDisplay();

/**
 * "move" click event
 * @param  {NULL} 
 * @return {NULL}          
 */
window.addEventListener('click', function(){
    const MOVE_ANGLE = setInterval(function() {
    for(let cntArray = 0; cntArray < ANGLE_BEGIN_POS_ARRAY.length - 1; cntArray++){
      circumference(PosArray[cntArray], AngleArray[cntArray]);
      if(AngleArray[cntArray] < ANGLE_END_POS_ARRAY[cntArray]){AngleArray[cntArray]++;}else{clearInterval(MOVE_ANGLE);}
    }
  }, 20);
  swapArray();
  changeText();
  initAngleData();
  changeDisplay();
});

/**
 * first routine
 * @param  {NULL} 
 * @return {NULL}          
 */
function initAngleData() {
  for(let cntArray = 0; cntArray < PosArray.length; cntArray++){
    AngleArray[cntArray] = ANGLE_BEGIN_POS_ARRAY[cntArray];
    document.getElementById('circle-' + PosArray[cntArray]).style.display = "inline";
  }
  document.getElementById('circle-' + PosArray[4]).children[0].style.borderWidth = "2px";
  document.getElementById('circle-' + PosArray[4]).children[0].style.borderStyle = "solid";
  document.getElementById('circle-' + PosArray[4]).children[0].style.borderColor = "gray";
};

/**
 * move target elements
 * @param  {Number} circleNo  circleNo are 7 in all
 * @param  {Number} angle     
 * @return {NULL}          
 */
function circumference(circleNo, angle) {
  var circleElement = document.getElementById('circle-' + circleNo);
  var circleWidth = getComputedStyle(circleElement).width;
  roundRadius = roundWidth.replace('px', '')/2;
  circleWidth = circleWidth.replace('px', '');
  var centerX = roundClientRect.left + roundRadius;
  var centerY = roundClientRect.top + roundRadius;
  
  var moveX   = Math.cos(angle*Math.PI/180)*roundRadius + centerX - circleWidth/2;
  var moveY   = Math.sin(angle*Math.PI/180)*roundRadius + centerY - circleWidth/2;
  circleElement.style.left  = moveX + 'px';
  circleElement.style.top   = moveY + 'px';
};

/**
 * Swap the contents of the array in display order
 * @param  {Number}  
 * @return {NULL}          
 */
function swapArray() {
  let TmpArray = PosArray.slice(0, PosArray.length);
  for(let cntArray = 0; cntArray < PosArray.length; cntArray++){
    if(cntArray != PosArray.length - 1){
      PosArray[cntArray + 1] = TmpArray[cntArray];
    }else{
      PosArray[0] = TmpArray[cntArray];
    }
  }
}

/**
 * change display
 * @param  {Number}  
 * @return {NULL}          
 */
function changeDisplay() {
  document.getElementById('circle-' + PosArray[0]).style.display = "none";
  for(let cntHidden = 1; cntHidden < PosArray.length - 5; cntHidden++){
    document.getElementById('circle-' + PosArray[PosArray.length - cntHidden]).style.display = "none";
    // document.querySelector('#circle-' + PosArray[PosArray.length - cntHidden]).animate(
  //     [
  //       { opacity: 1},
  //       { opacity: 0}
  //     ],
  //     {
  //       duration: 3000,
  //       fill: 'forwards'
  //     }
  //   );
  }
  document.getElementById('circle-' + PosArray[3]).children[0].style.borderWidth = "5px";
  document.getElementById('circle-' + PosArray[3]).children[0].style.borderStyle = "double";
  document.getElementById('circle-' + PosArray[3]).children[0].style.borderColor = "white";
}

/**
 * change display
 * @param  {Number}  
 * @return {NULL}          
 */
 function changeText() {
  var PosNo = PosArray[3];
  console.log(PosArray[3]);
  var src = document.getElementById('circle-' + PosArray[3]).children[0].getAttribute('src');
  document.getElementById('main-div').style.backgroundImage = 
    "linear-gradient(110deg, rgba(80,20,100,0.6) 50%, rgba(5,100,100,0.6) 50%), url(" + src + ")";
  document.getElementById('main-when').innerHTML = TEXT_WHEN[PosNo - 1];
  document.getElementById('main-title').innerHTML = TEXT_TITLE[PosNo - 1];
  document.getElementById('main-content').innerHTML = TEXT_CONTENT[PosNo - 1];
}