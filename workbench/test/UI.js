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
       
        
        threads.start(function() {require("zidongdaka.js")

            
            
            
        



    });
    }
)       

}


/////////////////////////////////////////////////////////////////




