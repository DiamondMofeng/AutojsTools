try{
    auto();
}catch(error){
    toast("请授权给auto.js无障碍权限");
    sleep(2000);
    exit();
}

//打开 微信app
var appName = "微信"
launchApp(appName);
sleep(6000);


//打开 第二课堂成绩单 小程序
gesture(3,[300, 300], [300, 1200])
sleep(3000)
var dierketangchengjidan = text("第二课堂成绩单").findOnce();
if (dierketangchengjidan){
    click(dierketangchengjidan.bounds().centerX(), dierketangchengjidan.bounds().centerY());
    sleep(5000);
}

//进入 网络学习模块
var wangluoxuexi = text("可移动").findOnce();
if (wangluoxuexi){
    click(wangluoxuexi.bounds().centerX(), wangluoxuexi.bounds().centerY());
}
sleep(10000)


//进入第一个题目
click(500,500)
sleep(5000)
//滑到底部
gesture(1,[300, 300], [300, 1200])
sleep(2000)
gesture(1,[300, 300], [300, 1200])

toast("200秒后自动答题")
sleep(200000)  //等待200s

//自动答题部分

var kaishidati = text("开始答题").findOnce();
if (kaishidati){
    click(kaishidati.bounds().centerX(), kaishidati.bounds().centerY());
}






