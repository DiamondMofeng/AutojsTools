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
