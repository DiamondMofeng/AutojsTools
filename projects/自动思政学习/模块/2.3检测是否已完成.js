//isYiWanCheng()
//检测并跳过已完成的题目
function isYiWanCheng(){

    let is_YiWanCheng=1;
    let i=0;

    while(is_YiWanCheng==1){

        
        var yiwancheng=text("已完成").findOnce(i);
        var lll=textContains("浏览量").findOnce(i);
        var xxxsx=text("学习新思想").findOnce();


        /*
        //debug part

                        y1=lll.bounds().centerY();
                        y2=yiwancheng.bounds().centerY();
                        var str = "y1="+y1+"y2="+y2
                        toast(str)
        //
        */


        if(lll.bounds().centerY() -100 < yiwancheng.bounds().centerY()  
        & lll.bounds().centerY() +100 > yiwancheng.bounds().centerY() )    {
            

            gesture(700,[xxxsx.bounds().centerX(), yiwancheng.bounds().centerY()],[xxxsx.bounds().centerX(), xxxsx.bounds().centerY()]   );
            
            i=i+1


            }
        else is_YiWanCheng=0

    }
    sleep(2000)

    //toast("done!")
    toast("检测完成，已切换到未完成题目")
    return false
}