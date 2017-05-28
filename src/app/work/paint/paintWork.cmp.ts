import { Component, Input, ViewChild, OnInit, ElementRef, Renderer } from '@angular/core';
import { workInfoService } from '../../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'paint-work-section',
	templateUrl: 'paintWork.tmp.html'
})

export class paintWorkSection implements OnInit{
	paintInfoGlobal: Object;
	paintInfoItms: Array<Object>;

	constructor(private workSrv: workInfoService){}

	ngOnInit(){
		this.paintInfoGlobal = this.workSrv.generalPaintInfo();
		this.paintInfoItms = this.workSrv.paintInfoElements();

		this.workSrv.workHeaderData({back: this.paintInfoGlobal['headerBack'], title: this.paintInfoGlobal['title']});
	}
}