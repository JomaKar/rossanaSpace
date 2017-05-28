import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent } from './home/home.cmp';

import { workRoutes } from './routes/workRoutes.mdl';
import { WorkContainerComponent } from './work/workContainer.cmp';

import { ExposComponent } from './expos/expos.cmp';
import { BioComponent } from './bio/bio.cmp';
import { ContactComponent } from './contact/contact.cmp';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'works', pathMatch: 'full', redirectTo: 'works/all'},
	{ path: 'works', component: WorkContainerComponent, children: workRoutes},
	{ path: 'expos', component: ExposComponent},
	{ path: 'bio', component: BioComponent},
	{ path: 'contact', component: ContactComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRouterModule{}