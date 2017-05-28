import { Directive, ElementRef, Renderer, Input, OnInit, HostBinding } from '@angular/core'

@Directive({
	selector: '[injectedStyle]'
})

export class InjectStyleDirective implements OnInit{
	@Input() injectedStyle: string;

	constructor(private elR: ElementRef, private ren: Renderer){
	}

	ngOnInit(){
		// console.log('back', this.backImg);
		this.ren.setElementClass(this.elR.nativeElement, this.injectedStyle, true);
	}


}