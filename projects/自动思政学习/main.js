try{
    auto();
}catch(error){
    toast("请授权给auto.js无障碍权限");
    sleep(2000);
    exit();
}

toast("正在打开微信app");

//打开 微信app
var appName = "微信"
launchApp(appName);
toast("6秒后进入第二课堂成绩单小程序");

sleep(6000);


//打开 第二课堂成绩单 小程序
gesture(3,[300, 300], [300, 1200]);
sleep(3000);
var dierketangchengjidan = text("第二课堂成绩单").findOnce();
if (dierketangchengjidan){
    click(dierketangchengjidan.bounds().centerX(), dierketangchengjidan.bounds().centerY());
}
toast("10秒后进入网络学习模块");
sleep(10000)

//进入 网络学习模块
var wangluoxuexi = text("可移动").depth(6).findOnce();
if (wangluoxuexi){
    click(wangluoxuexi.bounds().centerX(), wangluoxuexi.bounds().centerY());
}

toast("10秒后进入第一个题目");
sleep(10000);


//进入第一个题目
click(500,500);
sleep(5000);
//滑到底部
gesture(1,[300, 1200], [300, 300]);
sleep(2000);
gesture(1,[300, 1200], [300, 300]);



//自动答题倒计时
for (i=200;i>0;i=i-10) {
    toast (i + "秒后自动答题" )
    sleep(10000)
    }



toast("正在开始自动答题");

//自动答题部分

var kaishidati = text("开始答题").findOnce();
if (kaishidati){
    click(kaishidati.bounds().centerX(), kaishidati.bounds().centerY());
}


//定义部分开始


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

//单次举
function QJ(){
    KSDT();
    var opt = className("android.widget.RadioButton").findOnce(i);
    click(opt.bounds().centerX(), opt.bounds().centerY());
    sleep(2000);
    QD();
    sleep(12000);
    }
     
//定义部分结束
    
//for循环
    y=1140
    for (i=0;i<4;i++){
        QJ();
        y=y+100;
    }
    
    
    
    



