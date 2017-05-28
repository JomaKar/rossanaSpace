import { Injectable } from '@angular/core';

import { workSectionGlobalInfo } from '../info/generalInfo.info';
import { workGlobalPageInfo } from '../info/workPageGeneralInfo.info';
import { installationGlobalPageInfo } from '../info/installationpageGeneralInfo.info';

@Injectable()
export class imgsPresentationInfoService{
	private worksGlobal: Array<Object> = workSectionGlobalInfo;
	private workGlobalPageInfo: Array<Object> = workGlobalPageInfo;
	private installationGlobalPageInfo: Array<Object> = installationGlobalPageInfo;

	getWorkPrstInfo(){
		return this.worksGlobal;
	}


	getWorksPageInfo(){
		return this.workGlobalPageInfo;
	}

	getInstallationGlobalPageInfo(){
		return this.installationGlobalPageInfo;
	}
}