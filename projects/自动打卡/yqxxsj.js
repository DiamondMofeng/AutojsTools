//打开 疫情信息收集
var yiqingxixishouji = text("疫情信息收集").findOnce();
if (yiqingxixishouji){
    click(yiqingxixishouji.bounds().centerX(), yiqingxixishouji.bounds().centerY());
    sleep(5000);
}
else{
    toast("未找到疫情信息收集");
    exit();
}
sleep(5000)
gesture(1,[300, 600], [300, 300])