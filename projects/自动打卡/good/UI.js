"ui";

showUI()


function showUI(){


    ui.layout(
        <frame>
            <vertical>
                <text text="欢迎使用自动打卡" textColor="black" textSize="16sp" textAlign="center" />
                <button id="kaishidaka" text="开始自动打卡"  />
                

                <timepicker timePickerMode="spinner" />


            </vertical>
        </frame>
    );

    ui.kaishidaka.on("click", ()  => {
       
        
        threads.start(function() {

            toast("请检查是否授予本app无障碍权限",5000);
            auto.waitFor()
            
            
            toast("已获取无障碍权限，正在执行自动打卡")
            //打开 今日校园app
            var appName = "今日校园"
            launchApp(appName);
            
            toast("15秒后打开我的大学");
            sleep(15000);
            
            //打开 我的大学
            var wodedaxue = text("我的大学").findOnce();
            if (wodedaxue){
                wodedaxue.click();
                
            }
            else{
                toast("未找到我的大学入口");
                exit();
            }
            
            
            toast("10秒后打开疫情信息收集");
            sleep(10000);
            
            //打开 疫情信息收集
            var yiqingxixishouji = text("疫情信息收集").findOnce();
            if (yiqingxixishouji){
                click(yiqingxixishouji.bounds().centerX(), yiqingxixishouji.bounds().centerY()  );
            
                
            }
            else{
                toast("未找到疫情信息收集");
                exit();
            }
            
            toast("10秒后开始打卡操作");
            
            sleep(10000);
            
            
            //完成打卡
            gesture(1,[300, 600], [300, 300]);
            sleep(3000);
            click(550,2160);
            
            //自动关闭
            toast("3秒后自动关闭今日校园app")
            sleep(3000);
            
            
            toast("正在强行停止今日校园app")
            关闭应用("今日校园")
            
            function 关闭应用(packageName) {
                var name = getPackageName(packageName); 
                if(!name){
                    if(getAppName(packageName)){
                        name = packageName;
                    }else{
                        return false;
                    } 
                }
                app.openAppSetting(name);
                text(app.getAppName(name)).waitFor();  
                let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
                if (is_sure.enabled()) {
                    textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                    sleep(2000);
                    textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).untilFind().click();
                    log(app.getAppName(name) + "应用已被关闭");
                    toast(app.getAppName(name) + "应用已被关闭");
                    sleep(1000);
                    back();
                } else {
                    log(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
                    toast(app.getAppName(name) + "应用不能被正常关闭或不在后台运行");
                    back();
                }
            }
            
            
            sleep(1000);
            toast("自动打卡结束");
            
            
        



    });
    }
)       

}


/////////////////////////////////////////////////////////////////




