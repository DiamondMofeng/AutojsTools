//enterNetLearning();

function enterNetLearning(){

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
    sleep(10000);

    //进入 网络学习模块
    var wangluoxuexi = text("可移动").findOne();
    if (wangluoxuexi){
        click(wangluoxuexi.bounds().centerX(), wangluoxuexi.bounds().centerY());
    }

}