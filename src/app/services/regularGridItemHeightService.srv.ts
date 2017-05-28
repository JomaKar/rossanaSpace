import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class gridItemHeightService{

	storingHeight = new Subject<number>();
	storgingHeight$ = this.storingHeight.asObservable();


	extendingHeight(height: number){
		console.log('heightReceived', height);
		this.storingHeight.next(height);
	}

}