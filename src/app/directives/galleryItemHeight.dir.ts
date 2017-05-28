import { Directive, ElementRef, Renderer, OnInit, HostListener, Input } from '@angular/core';
import { windowWidthService } from '../services/windowWidthService.srv';
import { gridItemHeightService } from '../services/regularGridItemHeightService.srv';

@Directive({
	selector: '[itemHeightGallery]'
})

export class ItemGalleryHeightDirective implements OnInit{
	@Input() itemHeightGallery: number;
	generalHeight: number

	constructor(private elR: ElementRef, private ren: Renderer, private itmHeightService: gridItemHeightService){
		itmHeightService.storgingHeight$.subscribe(data => this.generalHeight = data);
	}

	@HostListener('window:resize') resize(){
		if(this.itemHeightGallery == 0) this.sendHeight();
		this.sizer();
	}

	ngOnInit(){
		if(this.itemHeightGallery == 0) this.sendHeight();
		this.sizer();
	}

	sendHeight(){
		let width = this.elR.nativeElement.clientWidth;
		let fullHeight = width * 0.66791045;
		this.generalHeight = fullHeight;
		console.log('hi', fullHeight, 'itmNumber', this.itemHeightGallery);
		this.itmHeightService.extendingHeight(fullHeight);
	}

	sizer(){
		// console.log('resizer working', this.elR.nativeElement.clientWidth, this.elR.nativeElement.offsetWidth);
		this.itmHeightService.storgingHeight$.subscribe(data =>  {
			console.log('dataObteined', data);
			this.generalHeight = data;
		});
		console.log('generalHeight', this.generalHeight);
		this.ren.setElementStyle(this.elR.nativeElement, 'height', `${this.generalHeight}px`);
	}

}