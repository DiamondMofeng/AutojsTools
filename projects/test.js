var wangluoxuexi = text("可移动").findOne();
    if (wangluoxuexi){
        click(wangluoxuexi.bounds().centerX(), wangluoxuexi.bounds().centerY());
    }