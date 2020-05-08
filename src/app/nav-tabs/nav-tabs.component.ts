import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav-tabs',
	templateUrl: './nav-tabs.component.html',
	styleUrls: [ './nav-tabs.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class NavTabsComponent implements OnInit {
	navLinks: any[];
	activeLinkIndex = -1;
	constructor(private router: Router) {
		this.navLinks = [
			{
				label: 'Latest',
				link: './latest',
				index: 0
			},
			{
				label: 'Search',
				link: './search',
				index: 1
			},
			{
				label: 'Categories',
				link: './categories',
				index: 2
			}
		];
	}

	ngOnInit(): void {
		this.router.events.subscribe((res) => {
			this.activeLinkIndex = this.navLinks.indexOf(
				this.navLinks.find((tab) => tab.link === '.' + this.router.url)
			);
		});
	}
}
