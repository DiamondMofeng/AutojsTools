//点击开始答题
function click_StartAnswer() {
    let kaishidati = text("开始答题").findOnce();
    if (kaishidati){
        kaishidati.click();
        }
    sleep(2000);
}
    
//点击确定
function click_Submit() {
    let queding = className("android.view.View").text("确定").findOnce();
    if (queding){
        click(queding.bounds().centerX(), queding.bounds().centerY());
        sleep(2000);
    }
}
        

    
    //举
function qiongJu_Once(){
    click_StartAnswer();
    let opt = className("android.widget.RadioButton").findOnce(i);
    click(opt.bounds().centerX(), opt.bounds().centerY());
    sleep(2000);
    click_Submit();
    
}
    
function answerMethod_QiongJu(){
    


}


/*    
for (i=0;i<4;i++){

    var opt = className("android.widget.RadioButton").findOnce(i);
    click(opt.bounds().centerX(), opt.bounds().centerY());
    sleep(2000);
    }
*/