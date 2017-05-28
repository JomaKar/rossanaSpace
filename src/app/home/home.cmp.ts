import { Component, OnInit } from '@angular/core';

import { imgsPresentationInfoService } from '../services/imgsPrstService.srv';
import { workInfoService } from '../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'home-landing',
	templateUrl: 'home.tmp.html'
})
export class HomeComponent {
	backgroundHeaderImg: string = 'assets/works/installation/Deckel/back.jpg';
	headerSize: boolean = true;
	numberOfInfoElements: number;
	thereAreWorksToShow: boolean = true;
	titleHeader: string = 'Rosaana Velasco';
	// subtitleHeader: string = 'a lot to see, the best first!';
	subtitleHeader: string = '';

	globalInfo: Array<Object>;

	constructor(private imgsPrsSer: imgsPresentationInfoService, private wInfo: workInfoService){
		let infoToWorkWith = imgsPrsSer.getWorkPrstInfo();
		this.numberOfInfoElements = infoToWorkWith.length;
		this.thereAreWorksToShow = (this.numberOfInfoElements < 1) ? false : true;
		this.globalInfo = infoToWorkWith;
	}

}
