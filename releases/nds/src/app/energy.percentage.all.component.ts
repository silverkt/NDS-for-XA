import { Component, Input, OnInit } from "@angular/core";
import { DatamainboardServices } from './data.services';

@Component({
    moduleId: module.id,
    selector: "energy-percentage-all",
    template: `
        <div id="energy-percentage-all">
                            <div class="col-md-4" style="font-size:16px;padding-top:15px;font-weight:bold;">综合能源利用率</div>
                            <div class="col-md-4" style="font-size:50px;font-weight:bold;color:#4caead;">{{odata.percentage}}</div>
                            <div class="col-md-4" style="padding-top:20px;"><img src="lib/4l.png" style="width:50%;"><img src="lib/4l.png" style="width:50%;"></div>
                            <div class="col-md-12"><div style="padding-top:8px;font-size:10px;">总能源输入:{{odata.inputall}}  总能源输出:{{odata.outputall}}</div></div>
        </div>
    `,
    styles: [`
         #energy-percentage-all {
              height:110px;
              background-color: #FFFFFF;
          }
          #energy-percentage-all>.col-md-4 {
              height:80px;
              background-color: #024272;
              color: #fff;
          }
    `],
    providers: [DatamainboardServices]
    
})
export class EnergypercentageallComponent implements OnInit{ 
    @Input()
    scope: string;
    odata: any = {
        percentage: '',
        inputall: '',
        outputall: ''
    };
     
    constructor( private data: DatamainboardServices ){
    }

    ngOnInit() {
        this.odata = this.data.get4lall(this.scope);
    }
}