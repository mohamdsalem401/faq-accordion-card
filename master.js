var question_status = [false, false, false, false, false]

var click_item = function(item) {
  if (question_status[item] == true) {
    document.getElementById("answer" + String(item)).style['font-size'] = '0';
    document.getElementById("question" + String(item)).style['font-weight'] = '400';
    document.getElementById("question" + String(item)).style['color'] = 'var(--very-dark-grayish-blue)';
    document.getElementById("arrow" + String(item)).style.transform = 'rotate(0)';
    document.getElementById("question" + String(item)).addEventListener("mouseover",(i=item) => {changeColorToRed(i)});
    document.getElementById("question" + String(item)).addEventListener("mouseout", (i=item) => {changeColorToNormal(i)});
    question_status[item] = false;
  } else {
    document.getElementById("answer" + String(item)).style['font-size'] = '16px';
    document.getElementById("question" + String(item)).style['font-weight'] = '700';
    document.getElementById("question" + String(item)).style['color'] = 'var(--very-dark-desaturated-blue)';
    document.getElementById("arrow" + String(item)).style.transform = 'rotate(180deg)';
    question_status[item] = true;
  }
}
var changeColorToRed = function(i){
  if (question_status[i] == false){
  document.getElementById("question" + String(i)).style['color'] = 'var(--soft-red)';
}}

var changeColorToNormal = function(i){
    if (question_status[i] == false){
  document.getElementById("question" + String(i)).style['color'] = 'var(--very-dark-desaturated-blue)';
}}
