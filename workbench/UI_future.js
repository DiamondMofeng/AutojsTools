"ui";
//Mofeng:感谢作者提供的界面模板
var color = "#FB7299";

ui.layout(
    <drawer id="drawer" >
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="Mofeng工具箱" bg="#FB7299"/>
                <tabs id="tabs" bg="#FB7299"/>
            </appbar>
            <viewpager id="viewpager" >
                <frame w="*" h="*">
                    

                    
                    <text text="欢迎使用今日校园自动打卡" textColor="black" textSize="16sp" gravity="top|center" marginTop="200" />
                    <button id="kaishidaka" text="开始自动打卡" w="300" h="100" layout_gravity="center" />
                    



                </frame>
                <frame>

                    
                    <text text="制作中…………" textColor="red" textSize="16sp" gravity="center"/>






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




//按钮功能

//开始自动打卡
ui.kaishidaka.on("click", ()  => {
       
        
    threads.start(function() {require("zidongdaka.js")}
                )
            }
)