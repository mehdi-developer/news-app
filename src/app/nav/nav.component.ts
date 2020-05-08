import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {
	@Output() menu = new EventEmitter();

	func() {
		this.menu.emit();
	}

	constructor() {}

	ngOnInit(): void {}
}
