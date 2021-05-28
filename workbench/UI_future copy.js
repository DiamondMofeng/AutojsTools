"ui";
//Mofeng:感谢作者提供的界面模板
var color = "#FB7299";

ui.layout(
    <drawer id="drawer" >
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="Mofeng工具箱" bg="#FB7299" />
                <tabs id="tabs" bg="#FB7299"/> 
            </appbar>
                <viewpager id="viewpager" >
                <frame w="*" h="*">
                    

                    
                    <text text="欢迎使用今日校园自动打卡" textColor="black" textSize="16sp" gravity="top|center" marginTop="200" />
                    <button id="kaishidaka" text="开始自动打卡" w="300" h="100" layout_gravity="center" />
                    



                </frame>
                <frame>
                    
                    <vertical>
                        <timepicker id="timepicker" timePickerMode="spinner" />

                        <button text="设置每日定时打卡" id="startDingshidaka"/>
                        <button text="取消每日定时打卡" id="stopDingshidaka" />
                        <button id="getstatus_DSDK" text="获取当前定时打卡信息"/>
                        <text id="status_DSDK" text="还未做好，功能先注释掉了" />
                    </vertical>
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="175" scaleType="fitXY" src="https://z3.ax1x.com/2021/05/23/gXpeMj.png"/>   
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

ui.statusBarColor("#FB7299")

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    //menu.add("设置");
    menu.add("关于");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        /*
        case "设置":
            toast("还没有设置");
            break;
        */
        case "关于":
            alert("关于", "Made by mofeng \nversion 0.1.0 \nPowered by Auto.js");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题
ui.viewpager.setTitles(["主页", "定时设置"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([
  /*
  {
      title: "主页",
      icon: "@drawable/ic_android_black_48dp"
  },
  {
      title: "定时设置",
      icon: "@drawable/ic_settings_black_48dp"
  },
  */
  {
      title: "联系作者",
      icon: "@drawable/ic_announcement_black_48dp"
},
  {
      title: "退出",
      icon: "@drawable/ic_exit_to_app_black_48dp"
  }
]);

ui.menu.on("item_click", item => {
    switch(item.title){
        case "联系作者":
            app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?&uin=363034937"
            })

        case "退出":
            ui.finish();
            break;
    }
})


//PAGE:主页

//按钮功能

//开始自动打卡
ui.kaishidaka.on("click", ()  => {
       
        
    threads.start(function() {require("zidongdaka.js")}
                )
            }
);


//PAGE:定时设置/////////////////////////////////////////////////////////////////////////////////////


/*



//timepicker


//  let hh = ui.timepicker.getCurrentHour();
//  let mm = ui.timepicker.getCurrentMinute();

//开启每日自动打卡










ui.startDingshidaka.on("click",()  => {

    var hh = ui.timepicker.getCurrentHour();
    var mm = ui.timepicker.getCurrentMinute();

    var task_dsdk = $timers.addDailyTask({
            id:"daka",
            path: "zidongdaka.js",
            time: new Date(0, 0, 0, hh, mm-5, 0),
            delay: 0,
            loopTimes: 1,
            interval: 0,
    });
    log("已开启自动打卡");
});
//停止每日自动打卡

ui.stopDingshidaka.on("click",()  => {


    $timers.removeTimedTask("daka");
    log("已关闭自动打卡");
});

//获取自动打卡设置信息



ui.getstatus_DSDK.on("click",()  => {
   
    let tasks = $timers.queryTimedTasks({
        path: "zidongdaka.js"
    });

    // 删除查找到的所有定时任务
    tasks.forEach(t => {
        console.log("删除: ", t);
        log($timers.removeTimedTask(t.id));
});
});




//////////////////////////////////////////////////////////////////

*/


/*
ui.getstatus_DSDK.on("click",()  => {
    if (typeof task_dsdk !== "undefined" && 
        typeof hh !== "undefined" &&
        typeof mm !== "undefined") {
        var status_DSDK_isOn="开启"

    }
    ui.status_DSDK.setText("当前设置：\n自动模式开启状态："+status_DSDK_isOn+"\n设定时间:"+hh+":"+mm);


});

*/


/*
if (!$power_manager.isIgnoringBatteryOptimizations()) {
    console.log("未开启忽略电池优化");
    $power_manager.requestIgnoreBatteryOptimizations();
}

*/