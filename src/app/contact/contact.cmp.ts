import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'contact-rosana',
	templateUrl: 'contact.tmp.html'
})
export class ContactComponent implements OnInit{
	@ViewChild('myContactSection') myContactSection: ElementRef;
	backImage: boolean = false;
	myBackColor: string = '#EEEEEE';

	constructor(private render: Renderer){

	}

	ngOnInit(){
		this.decideBakground();
	}

	decideBakground(){
		(!this.backImage) ? 
			this.render.setElementStyle(this.myContactSection.nativeElement, 'background-color', this.myBackColor)
		:
		(
			this.render.setElementClass(this.myContactSection.nativeElement, 'backImg', true),
			this.render.setElementClass(this.myContactSection.nativeElement, 'imageOnContactBack', true)
		);
	}

}
