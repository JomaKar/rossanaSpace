import { Component, Input, ViewChild, OnInit, ElementRef, Renderer } from '@angular/core';

import { workInfoService } from '../../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'skulptur-work-section',
	templateUrl: 'skulpturWork.tmp.html'
})

export class skulpturWorkSection implements OnInit{
	generalInfo: Object;
	sculptures: Array<Object>;

	constructor(private workSrv: workInfoService){}

	ngOnInit(){
		this.generalInfo = this.workSrv.generalSculptureInfo();
		this.sculptures = this.workSrv.sculptureInfoElements();

		this.workSrv.workHeaderData({back: this.generalInfo['headerBack'], title: this.generalInfo['title']});
	}
}