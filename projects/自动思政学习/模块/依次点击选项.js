

for (i=0;i<4;i++){

    var opt = className("android.widget.RadioButton").findOnce(i);
    click(opt.bounds().centerX(), opt.bounds().centerY());
    sleep(2000);
    }

