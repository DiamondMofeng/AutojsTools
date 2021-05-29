//isAutoOn()

function isAutoOn(){
    toast("正在检查是否授予本app无障碍权限",5000);
    auto.waitFor()
    toast("已获取无障碍权限",5000);
}
