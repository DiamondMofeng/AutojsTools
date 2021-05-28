//点击开始答题
function KSDT() {
var kaishidati = text("开始答题").findOnce();
if (kaishidati){
    kaishidati.click();
    }
    sleep(2000);
}

//点击确定
function QD() {
    var queding = className("android.view.View").depth(9).text("确定").findOnce();
    if (queding){
        click(queding.bounds().centerX(), queding.bounds().centerY());
        sleep(2000);
        }
    }
    
   



//举
function QJ(){
KSDT();
click(200,y);
sleep(5000);

QD();
sleep(12000);

}

y=1140
QJ()
