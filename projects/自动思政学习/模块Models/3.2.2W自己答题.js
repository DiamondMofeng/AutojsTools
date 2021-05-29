answerMode_Self();

function answerMode_Self(){

    isWaitTimeOver();

    device.vibrate(2000);

    isAnswerRight();
//******************
    function isWaitTimeOver() {    
        let button_StartAnswer = className("android.widget.Button").text("开始答题").findOne() 
        if (button_StartAnswer){
            gesture(10,[500,700,[500,400]]);
            toast("可以开始答题了");
            button_StartAnswer.click();
        }
    }





    function isAnswerRight(){
        if ( feedback_Answer = textContains("回答").findOne(5000) ){
            if (feedback_Answer.text().indexOf("正确")>=0){
                toast("回答正确！正在检测是否可以进行下个题目")
                log("回答正确！");
                
            }

            else if (feedback_Answer.text().indexOf("错误")>=0){

                toast("回答错误，进入下一次穷举，当前次数：" + (i+1) );
                log("回答错误，进入下一次穷举，当前次数：" + (i+1) );
                i++;
                sleep(2000);
                back();
                sleep(3000);    //防止过快
                //continue lable_QiongJu;

            }
        else{
            log("未成功获取feedback_answer")
            }


        }


    }
}