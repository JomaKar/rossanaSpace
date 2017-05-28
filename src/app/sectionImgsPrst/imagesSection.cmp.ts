import { Component, OnInit, ElementRef, Renderer, ViewChild, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'image-list-section',
	templateUrl: 'imagesSection.tmp.html'
})

export class ImagesListSection implements OnInit{

	@ViewChild('sectionImgs') sectionImgs: ElementRef;
	@Input() global: boolean = false;
	@Input() noOfElements: number;
	@Input() info: Array<Object>;

	listReference: Array<Object>;

	pointer: string;
	backgroundImg: string;
	backgroundColorInHome: string = '#656565';
	title: string;

	constructor(private render: Renderer){
	}
	

	ngOnInit(){
		(this.global) ? this.setGlobalComponent() : this.setComponent();
		// console.log('itms to work', this.noOfElements);
	}

	setGlobalComponent(){
		this.listReference = this.info;
		this.render.setElementClass(this.sectionImgs.nativeElement, 'miniShadows', false);
		this.render.setElementStyle(this.sectionImgs.nativeElement, 'background-color', this.backgroundColorInHome);
	}

	setComponent(){
		this.title = this.info['componentInfo']['title'];
		this.pointer = this.info['componentInfo']['pointer'];
		this.backgroundImg = this.info['componentInfo']['backgroundImgs'];
		this.render.setElementClass(this.sectionImgs.nativeElement, 'noBack', false);
		this.render.setElementClass(this.sectionImgs.nativeElement, 'miniShadows', true);
		this.render.setElementClass(this.sectionImgs.nativeElement, 'backImg', true);
		this.render.setElementStyle(this.sectionImgs.nativeElement, 'background-image', `url(${this.backgroundImg})`);
		this.render.setElementStyle(this.sectionImgs.nativeElement, 'background-clip', 'border-box');
		(this.info['componentInfo']['sideInnerShadow'] !== undefined && this.info['componentInfo']['sideInnerShadow'] !== null && this.info['componentInfo']['sideInnerShadow'].length > 0) ? this.render.setElementClass(this.sectionImgs.nativeElement, this.info['componentInfo']['sideInnerShadow'], true) : null;
		this.listReference = this.info['elementsInfo'];
	}
}