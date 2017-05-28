import { Component, Input, ViewChild, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'image-list-item',
	templateUrl: 'imagesItem.tmp.html'
})

export class ImagesListItem implements OnInit{
	@Input() element: Object;
	@Input() itmsNum: number;
	@ViewChild('imgDiv') imgDiv: ElementRef;

	middleClass: string;
	imageSectionClasses: string;
	abstracSectionClasses: string;

	ngOnInit(){
		this.render.setElementStyle(this.imgDiv.nativeElement, 'background-image', `url(${this.element['img']})`);

		// itms responsive classes
		if(this.itmsNum === 3 || this.itmsNum <= 5) this.middleClass = 'col-sm-4';
		if(this.itmsNum === 2 || this.itmsNum === 4) this.middleClass = 'col-sm-6';
		if(this.itmsNum === 1) this.middleClass = 'col-sm-12';

		// imgs responsive classes
		if(this.itmsNum === 3 || this.itmsNum <= 5) this.imageSectionClasses = 'col-xs-12 col-lg-offset-2 col-lg-3';
		if(this.itmsNum === 2 || this.itmsNum === 4) this.imageSectionClasses = 'col-xs-12 col-md-4 col-md-offset-1 col-lg-offset-2';
		if(this.itmsNum === 1) this.imageSectionClasses = 'col-xs-12 col-md-4 col-md-offset-1 col-lg-offset-2';

		// // abstracts responsive classes
		if(this.itmsNum === 3 || this.itmsNum <= 5) this.abstracSectionClasses = 'col-xs-12 col-lg-5';
		if(this.itmsNum === 2 || this.itmsNum === 4) this.abstracSectionClasses = 'col-xs-12 col-md-6 col-lg-5';
		if(this.itmsNum === 1) this.abstracSectionClasses = 'col-xs-12 col-md-6 col-lg-5';
	}

	constructor(private render: Renderer, private route: Router){}

	goToSection(direction: string){
		// console.log(direction);
		this.route.navigate([`/works/${direction}`]);
	}

}