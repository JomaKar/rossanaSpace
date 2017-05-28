import { Component, Input, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'image-list-ul',
	templateUrl: 'imagesList.tmp.html'
})

export class ImagesList{
	@Input() listElements: Array<Object>;
	@Input() elementsNum: number;
}