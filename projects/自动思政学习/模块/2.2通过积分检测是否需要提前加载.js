//isPreloadNeeded();
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
    gesture(1,[300, 600], [300, 1200]);
    sleep(2000);
    gesture(1,[300, 600], [300, 1200]);
    toast("已返回第一题");

}