isAutoOn()

function isAutoOn(){
    toast("正在检查是否授予本app无障碍权限",5000);
    auto.waitFor()
    toast("已获取无障碍权限",5000);
}

enterNetLearning();

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


sleep(6000);



isCooled();
//检测是否达到做题CD
function isCooled(){
    toast("正在判断是否达到每日积分上限");
    sleep(1500);
    click(500,500);         //进入第一个题目
    if (textContains("24小时内学习积分已达到上限").findOne(3000)){
        toast("今天的做题已完成，请明天再来");
        
    }
    else {
        back();
        toast("检测完毕，未达到每日积分上限");
    }
    
}

isPreloadNeeded();
//检测是否需要提前加载题目
function isPreloadNeeded(){
    let button_score = textContains("积分").findOnce();
    let currentScoreText = button_score.text();
    let currentScore = currentScoreText.replace(/[^\d]/g, '');
    //log(currentScore);
    //log(currentScoreText);
    //log(typeof currentScore);
    if (currentScore > 4 ){
        toast("需要进行预加载");

        //预加载操作
        preLoad();
    }

    function preLoad(){
        //预加载次数
        let im = Math.floor(( currentScore - 4 ) / 10);

        for ( i=0 ; i <= im ; i++ ) {
            toast("预加载中")
            gesture(1,[300, 600], [300, 300]);
            if( im-i != 0 ){
            toast("6秒后继续进行预加载");
            sleep(6000);
            }
        }
    }
    toast("预加载结束，正在返回第一题");
    //返回第一题
    sleep(2000);
    gesture(10,[300, 600], [300, 1200]);
    sleep(2000);
    gesture(10,[300, 600], [300, 1200]);
    toast("已返回第一题");

}


sleep(3000);

isYiWanCheng();
//检测并跳过已完成的题目
function isYiWanCheng(){

    
    //log (text("已完成").find())               //经过测试，无论滑到何处均可以找到所有“已完成”
    if ( true ){    //*****************现在只能运行一次，希望在if中添加限制方法来解决问题*****************
        //let is_YiWanCheng=1;
        let i=0;
        
        while(true){

            
            let yiwancheng=text("已完成").findOnce(i);
            let lll=textContains("浏览量").findOnce(i);
            let xxxsx=text("学习新思想").findOnce();


            /*
            //debug part

                            y1=lll.bounds().centerY();
                            y2=yiwancheng.bounds().centerY();
                            var str = "y1="+y1+"y2="+y2
                            toast(str)
            //
            */

                if( yiwancheng &&
                    ( lll.bounds().centerY() -100 < yiwancheng.bounds().centerY()  
                & lll.bounds().centerY() +100 > yiwancheng.bounds().centerY() ) )    {
                    
                    //log(typeof test);
                    //log(test);
                    gesture(400,[xxxsx.bounds().centerX(), yiwancheng.bounds().centerY()],[xxxsx.bounds().centerX(), xxxsx.bounds().centerY()]   );
                    
                    i=i+1
                    //log(typeof test);
                    //log(test);

                }
                    //else is_YiWanCheng=0;
                    else break;

        }
    }
    //var isYiWanCheng_Checked = 1

    //log(typeof yiwancheng);
    //log(yiwancheng);

    //sleep(2000)

    //toast("done!")
    toast("检测完成，已切换到未完成题目")
    return false



}





answerMode_QiongJu();

function answerMode_QiongJu(){
    
    let i=0;
    let loopContinue = 1;
//  lable_QiongJu:
    while(loopContinue = 1){
//        sleep(2000);        //防止过快

        click(500,500);          //进入当前页面第一个题目

sleep(2000);        //调试需要
        isWaitTimeOver();        //等待可以开始答题并开始

        sleep(2000);       //防止过快 貌似过慢会分析不出来控件
log(i);             //调试需要
        clickOption();           //选择选项

        clickSubmit();           //进行提交
        
        isAnswerRight();        //判断回答是否正确并作出之后动作
        
    }
    
    //----------定义部分开始----------


    function isWaitTimeOver() {    
        let button_StartAnswer = className("android.widget.Button").text("开始答题").findOne() 
        if (button_StartAnswer){
            toast("等待时间已结束");
            button_StartAnswer.click();
        }
    }


    function clickOption(){
        if ( className("android.widget.RadioButton").findOne(10000) ){   //经常不能及时读取控件，于是加上这条判断
            let option = className("android.widget.RadioButton").findOnce(i);
            click(option.bounds().centerX(), option.bounds().centerY());
        }
        else {
            toast("未能在10秒内读取答题框信息，重新开始答题");
            log("未能在10秒内读取答题框信息，重新开始答题");
            isWaitTimeOver();
        }
    }


    function clickSubmit(){
        var submit = className("android.widget.Button").textContains("确定").findOnce();
        if (submit){
            click(submit.bounds().centerX(), submit.bounds().centerY());
            }
    }


    function isAnswerRight(){
        if ( feedback_Answer = textContains("回答").findOne(5000) ){
            if (feedback_Answer.text().indexOf("正确")>=0){

                log("回答正确！尝试次数："+ (i+1) );
                //break lable_QiongJu;
                loopContinue = 0;
            }

            else if (feedback_Answer.text().indexOf("错误")>=0){

                toast("进入下一次穷举，当前次数：" + (i+1) );
                log("进入下一次穷举，当前次数：" + (i+1) );
                i++;
                sleep(2000);
                back();
                sleep(5000);    //防止过快
                //continue lable_QiongJu;

            }
        else{
            log("未成功获取feedback_answer")
        }


        }


    }


    //----------定义部分结束----------



/*
            //----------判断是否做对----------

            if      ( textContains("回答正确").findOnce() ){
                log("回答正确！尝试次数："+ (i+1) );
                break;
            }
            else if ( textContains("努力").findOnce() ){
                toast("进入下一次穷举，当前次数：" + (i+1) );
                log("进入下一次穷举，当前次数：" + (i+1) );
                i++;
                back();
                sleep(5000);    //防止过快
                continue;
            }

*/

}


isCooled();

sleep(2000);



