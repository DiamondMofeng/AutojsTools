answerMode_QiongJu();

auto.setMode(fast);

function answerMode_QiongJu(){
    
    let i=0;
    let loopContinue = 1;
//  lable_QiongJu:
    while(loopContinue = 1){
//        sleep(2000);        //防止过快

        click(500,500);          //进入当前页面第一个题目

sleep(2000);        //调试需要
        isWaitTimeOver();        //等待可以开始答题并开始       //阻塞

        sleep(2000);       //防止过快 貌似过慢会分析不出来控件
log(i);             //调试需要
        clickOption();           //选择选项                     //伪阻塞

        clickSubmit();           //进行提交
        
        isAnswerRight();        //判断回答是否正确并作出之后动作
        
    }
    
    //----------定义部分开始----------


    function isWaitTimeOver() {    
        let button_StartAnswer = className("android.widget.Button").text("开始答题").findOne() 
        if (button_StartAnswer){
            toast("开始答题");
            button_StartAnswer.click();
        }
    }


    function clickOption(){

        while(true){            //不完成本函数就不继续下一步
            if ( className("android.widget.RadioButton").findOne(30000) ){   //经常不能及时读取控件，于是加上这条判断
log("option" + i);
                let option = className("android.widget.RadioButton").findOnce(i);
                click(option.bounds().centerX(), option.bounds().centerY());
log (typeof option.checked());
                if (option.checked() == true){
                    break;
                }
                
            }
            else {
                toast("未能在30秒内读取答题框信息，重新开始答题");
                log("未能在30秒内读取答题框信息，重新开始答题");
                isWaitTimeOver();
            }
        }
    }


    function clickSubmit(){     
        //while(true){            //不完成本函数就不继续下一步
            var submit = className("android.widget.Button").textContains("确定").findOnce();
            if (submit){
                click(submit.bounds().centerX(), submit.bounds().centerY());
            }
        //}
    }


    function isAnswerRight(){
        if ( feedback_Answer = textContains("回答").findOne(5000) ){
            if (feedback_Answer.text().indexOf("正确")>=0){

                log("回答正确！尝试次数："+ (i+1) );
                //break lable_QiongJu;
                loopContinue = 0;
            }

            else if (feedback_Answer.text().indexOf("错误")>=0){

                toast("回答错误，进入下一次穷举，当前次数：" + (i+1) );
                log("回答错误，进入下一次穷举，当前次数：" + (i+1) );
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
