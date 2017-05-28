import { Injectable } from '@angular/core';

import { exposGlobalInfo } from '../info/generalInfo.info';

@Injectable()
export class exposInfoService{
	private exposGlobal: Array<Object> = exposGlobalInfo;


	getGlobalInfoExpos(){
		return this.exposGlobal;
	}
}