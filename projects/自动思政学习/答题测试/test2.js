
check_yiwancheng=0
let i=0

while(check_yiwancheng==0){

    

    var yiwancheng=text("已完成").findOnce(i);
    var lll=textContains("浏览量").findOnce(i);
    var xxxsx=text("学习新思想").findOnce();

    //debug part
                    y1=lll.bounds().centerY();
                    y2=yiwancheng.bounds().centerY();
                    var str = "y1="+y1+"y2="+y2
                    toast(str)
    //


    if(lll.bounds().centerY() -100 < yiwancheng.bounds().centerY()  
    & lll.bounds().centerY() +100 > yiwancheng.bounds().centerY() )    {
        

        gesture(1000,[xxxsx.bounds().centerX(), yiwancheng.bounds().centerY()],[xxxsx.bounds().centerX(), xxxsx.bounds().centerY()]   );
        
        i=i+1
        }
    else check_yiwancheng=1

}
sleep(2000)

toast("done!")