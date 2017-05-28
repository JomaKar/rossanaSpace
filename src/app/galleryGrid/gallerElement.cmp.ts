import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'gallery-grid',
	templateUrl: 'gallerElement.tmp.html'
})


export class GalleryElement implements OnInit{
	@Input() elements: Array<Object>;
	@Input() specificStyleName: string;
	@Input() stamp: string;
	
	areElements: boolean = true;

	ngOnInit(){
		this.areElements = (this.elements !== null && this.elements !== undefined) ? true : false;
	}
}
