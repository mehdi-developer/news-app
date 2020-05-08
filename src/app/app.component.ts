import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleDownScaleDown, scaleDownFromRight, scaleDownFromLeft } from 'ngx-router-animations';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	// Routing Animations
	animations: [
		trigger('a', [ transition('* => *', useAnimation(scaleDownScaleDown)) ]),
		trigger('b', [ transition('categories => search', useAnimation(scaleDownFromLeft)) ]),
		trigger('c', [ transition('categories => latest', useAnimation(scaleDownFromLeft)) ]),
		trigger('d', [ transition('search => categories', useAnimation(scaleDownFromRight)) ]),
		trigger('e', [ transition('search => latest', useAnimation(scaleDownFromLeft)) ]),
		trigger('f', [ transition('latest => categories', useAnimation(scaleDownFromRight)) ]),
		trigger('g', [ transition('latest => search', useAnimation(scaleDownFromRight)) ])
	]
})
export class AppComponent {
	getState(outlet) {
		return outlet.activatedRouteData.state;
	}
}
