answerMode_QiongJu();
function answerMode_QiongJu(){
    
    let i=0;
    
    while(true){
//        sleep(2000);        //防止过快

        click(500,500);          //进入当前页面第一个题目

sleep(2000);        //调试需要
        isWaitTimeOver();        //等待可以开始答题并开始

        sleep(2000);       //防止过快 貌似过慢会分析不出来控件
log(i);             //调试需要
        clickOption();           //选择选项

        clickSubmit();           //进行提交
        
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


    //----------定义部分结束----------



}
