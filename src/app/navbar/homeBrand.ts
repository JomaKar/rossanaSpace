import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-brand',
	template: `
		<a routerLink="/home" class="navbar-brand halfPadding">
			<img src="assets/icon.png" width="78px">
		</a>
	`
})

export class BrandNavbar{}