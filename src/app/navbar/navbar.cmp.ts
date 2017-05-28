import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'navbar-rosana',
	templateUrl: './navbar.tmp.html'
})
export class NavbarComponent {
	@ViewChild('navbarMenu') navbarMenu: ElementRef;

	dropDowned: boolean = false;

	constructor(private render: Renderer){}


	displayMenu(){
		(!this.dropDowned) ? this.render.setElementClass(this.navbarMenu.nativeElement, 'in', true) : this.render.setElementClass(this.navbarMenu.nativeElement, 'in', false);
		this.dropDowned = !this.dropDowned;
	}
}
