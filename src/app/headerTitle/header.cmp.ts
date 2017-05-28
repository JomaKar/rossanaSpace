import { Component, ElementRef, Renderer, ViewChild, Input, OnInit } from '@angular/core';
import { workInfoService } from '../services/workInfoService.srv';

@Component({
	moduleId: module.id,
	selector: 'header-image',
	templateUrl: 'header.tmp.html'
})

export class HeaderTitle implements OnInit{
	@ViewChild('headerMain') headerMain : ElementRef;
	@Input() bigSize: boolean = false;
	@Input() subtitle: string;

	title: string;
	back: string;

	@Input() inBack: string;
	@Input() inTitle: string;

	headerData: Object;

	constructor(private render: Renderer, private wInfo: workInfoService){
	}

	ngOnInit(){
		console.log(this.inBack);
		if(this.inBack == undefined){
			this.wInfo.workHeaderInfo$.subscribe(data => {
				this.headerData = data;
				console.log(data);
				(data !== undefined) ? this.updateHeader() : null;
			});
		}else{
			this.updateWithInput();
		}
	}

	updateHeader(){
		this.title = this.headerData['title'];
		this.render.setElementStyle(this.headerMain.nativeElement, 'background-image', `url(${this.headerData['back']})`);
		(this.bigSize) ? this.render.setElementStyle(this.headerMain.nativeElement, 'height', '600px') :  this.render.setElementStyle(this.headerMain.nativeElement, 'height', '200px');
	}

	updateWithInput(){
		this.title = this.inTitle;
		this.render.setElementStyle(this.headerMain.nativeElement, 'background-image', `url(${this.inBack})`);
		(this.bigSize) ? this.render.setElementStyle(this.headerMain.nativeElement, 'height', '600px') :  this.render.setElementStyle(this.headerMain.nativeElement, 'height', '200px');
	}

}