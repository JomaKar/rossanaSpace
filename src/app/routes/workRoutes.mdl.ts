import { Routes } from '@angular/router';

import { installationWorkSection } from '../work/installation/installationWork.cmp';
import { paintWorkSection } from '../work/paint/paintWork.cmp';
import { skulpturWorkSection } from '../work/skulptur/skulpturWork.cmp';
import { workAllSection } from '../work/all/allContainer.cmp';

export const workRoutes: Routes = [
	{ path: 'all', component: workAllSection },
	{ path: 'installation', component:  installationWorkSection},
	{ path: 'sculpture', component:  skulpturWorkSection},
	{ path: 'paint', component:  paintWorkSection }
];