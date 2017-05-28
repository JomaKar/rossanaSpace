import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { exposInfoService } from '../services/exposInfoService.srv';


@Component({
	moduleId: module.id,
	selector: 'expos-rosana',
	templateUrl: 'expos.tmp.html'
})
export class ExposComponent implements OnInit{
	@ViewChild('myExposInHomeSection') myExposInHomeSection: ElementRef;
	exposGlobal: Array<Object>;
	backImage: boolean = false;
	myBackColor: string = '#9B9B9B';

	constructor(private expSer: exposInfoService, private render: Renderer){}

	ngOnInit(){
		this.exposGlobal = this.expSer.getGlobalInfoExpos();
		this.decideBakground();
	}

	decideBakground(){
		(!this.backImage) ? 
			this.render.setElementStyle(this.myExposInHomeSection.nativeElement, 'background-color', this.myBackColor)
		:
		(
			this.render.setElementClass(this.myExposInHomeSection.nativeElement, 'backImg', true),
			this.render.setElementClass(this.myExposInHomeSection.nativeElement, 'imageOnExposBack', true)
		);
	}

}
