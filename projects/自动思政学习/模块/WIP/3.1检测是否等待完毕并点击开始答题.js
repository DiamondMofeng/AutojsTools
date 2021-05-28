//isWaitTimeOver();
//log (isWaitTimeOver);
function isWaitTimeOver() {

/*
    //debug part
    if( waitTimeText = textContains("后开始答题").findOnce() ){


        let waitTime = waitTimeText.text().replace(/[^\d]/g, '');
        log (waitTime);
        log (typeof waitTime);
        log (waitTime < 0 )

    }
*/
    var button_StartAnswer = text("开始答题").findOne() 
    if (button_StartAnswer){
        toast("等待时间已结束");
        button_StartAnswer.click();
    }

}
