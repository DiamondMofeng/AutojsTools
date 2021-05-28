/*
if (!$power_manager.isIgnoringBatteryOptimizations()) {
    console.log("未开启忽略电池优化");
    $power_manager.requestIgnoreBatteryOptimizations();
}

*/
var hh=14;
var mm=30;


console.log($timers.addDailyTask({
    path: "/sdcard/脚本/自动打卡.js",
    time: new Date(0, 0, 0, hh, mm, 0),
    delay: 0,
    loopTimes: 1,
    interval: 0,
}));