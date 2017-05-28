import { Injectable, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { skulpturInfoGeneral, skulturItmsInfo } from '../info/skulpturInfo.info';
import { paintureItmsInfo, paintureInfoGeneral } from '../info/paintInfo.info';
import { installierungInfoGeneral } from '../info/installationsInfo.info';

@Injectable()
export class workInfoService{
	private sculptureGlobal : Object = skulpturInfoGeneral;
	private sculptureItms : Array<Object> = skulturItmsInfo;
	private paintGlobal : Object = paintureInfoGeneral;
	private paintItms : Array<Object> = paintureItmsInfo;
	private installationGlobal : Object = installierungInfoGeneral;

	workHeaderInfo = new Subject<Object>();
	workHeaderInfo$ = this.workHeaderInfo.asObservable();

	workHeaderData(info: Object){
		// console.log(info);
		this.workHeaderInfo.next(info);
	}

	generalSculptureInfo(){
		return this.sculptureGlobal;
	}

	sculptureInfoElements(){
		return this.sculptureItms;
	}

	sculptureItem(theId: number){
		let arr =  this.sculptureInfoElements();

		return arr.filter(el => el['id'] == theId);
	}

	generalPaintInfo(){
		return this.paintGlobal;
	}

	paintInfoElements(){
		return this.paintItms;
	}

	paintItem(theId: number){
		let arr =  this.paintInfoElements();

		return arr.filter(el => el['id'] == theId);
	}

	generalInstallationInfo(){
		return this.installationGlobal;
	}

	installationInfoElements(){
		return this.sculptureItms;
	}

	installationItem(theId: number){
		let arr =  this.installationInfoElements();

		return arr.filter(el => el['id'] == theId);
	}

}