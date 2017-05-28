import { Component } from '@angular/core';
import { Routes, ActivatedRoute }   from '@angular/router';

import { imgsPresentationInfoService } from '../../services/imgsPrstService.srv';
import { workInfoService } from '../../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'works-all-container',
	templateUrl: 'allContainer.tmp.html'
})

export class workAllSection{
	works: Array<Object>;
	headerData: Object = {
		back: 'assets/works/g.jpg',
		title: 'Werke'
	}

	constructor(private imgsPrstSer: imgsPresentationInfoService, private aRoute: ActivatedRoute, private wInfo: workInfoService){
	  	this.works = imgsPrstSer.getWorksPageInfo();
	  	wInfo.workHeaderData(this.headerData);
	}
}