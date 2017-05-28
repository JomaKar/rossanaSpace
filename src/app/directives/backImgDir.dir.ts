import { Directive, ElementRef, Renderer, Input, OnInit, HostBinding } from '@angular/core'

@Directive({
	selector: '[backImg]'
})

export class BackgroundImageDirective implements OnInit{
	@Input() backImg: string;

	constructor(private elR: ElementRef, private ren: Renderer){
	}

	ngOnInit(){
		// console.log('back', this.backImg);
		this.ren.setElementStyle(this.elR.nativeElement, 'background-image', `url(${this.backImg})`);
	}


}