//isCooled();
//检测是否达到做题CD
function isCooled(){
    toast("正在判断是否达到每日积分上限")
    click(500,500);         //进入第一个题目
    if (textContains("24小时内学习积分已达到上限").findOne()){
        toast("今天的做题已完成，请明天再来");
        
    }
    


    
    


    
}