import { Component, Input, ViewChild, OnInit, ElementRef, Renderer } from '@angular/core';

import { workInfoService } from '../../services/workInfoService.srv';
import { imgsPresentationInfoService } from '../../services/imgsPrstService.srv';

@Component({
	moduleId: module.id,
	selector: 'installation-work-section',
	templateUrl: 'installationWork.tmp.html'
})

export class installationWorkSection implements OnInit{
	globalInfo: Object;
	installierungInfoGeneral: Object = {
		title: 'Installierung',
		back: 'assets/works/installation/Deckel/za.jpg'
	};

	constructor(private render: Renderer, private workInfo: workInfoService, private imgsSer: imgsPresentationInfoService){}

	ngOnInit(){
		this.workInfo.workHeaderData(this.installierungInfoGeneral);
		this.globalInfo = this.imgsSer.getInstallationGlobalPageInfo();
	}
}