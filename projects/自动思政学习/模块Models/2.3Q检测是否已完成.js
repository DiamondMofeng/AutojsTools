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