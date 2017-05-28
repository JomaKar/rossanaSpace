import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute }   from '@angular/router';

import { imgsPresentationInfoService } from '../services/imgsPrstService.srv';
import { workInfoService } from '../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'work-cont',
	templateUrl: 'workContainer.tmp.html'
})

export class WorkContainerComponent{
	headerSize: boolean = false;

	constructor(private aRoute: ActivatedRoute, private wInfo: workInfoService){
	}

}
