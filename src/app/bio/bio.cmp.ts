import { Component, ViewChild, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'bio-rosana',
	templateUrl: 'bio.tmp.html'
})
export class BioComponent implements OnInit{
	@ViewChild('myBioSectionInHome') myBioSectionInHome: ElementRef;
	backImage: boolean = false;
	myBackColor: string = '#C2C2C2';

	constructor(private render: Renderer){}

	ngOnInit(){
		this.decideBakground();
	}

	decideBakground(){
		(!this.backImage) ? 
			this.render.setElementStyle(this.myBioSectionInHome.nativeElement, 'background-color', this.myBackColor)
		:
		(
			this.render.setElementClass(this.myBioSectionInHome.nativeElement, 'backImg', true),
			this.render.setElementClass(this.myBioSectionInHome.nativeElement, 'imageOnExposBack', true)
		);
	}
}
