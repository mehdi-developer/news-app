import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';
import { MatDialog } from '@angular/material/dialog';
import { AboutAppComponent } from '../about-app/about-app.component';
import { DataService } from '../data.service';
import { AboutRestComponent } from '../about-rest/about-rest.component';

@Component({
	selector: 'app-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: [ './sidenav-list.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class SidenavListComponent implements OnInit {
	constructor(private config: ConfigService, private dialog: MatDialog, private data: DataService) {}
	err;
	sources;

	// Close sidenavbar emiting to the parent where sidenav is
	@Output() close = new EventEmitter();

	// Load Sources from data service
	ngOnInit(): void {
		// Get all news sources from config service
		this.config.getSources().subscribe((data) => {
			this.sources = data;
			(err) => {
				this.err = err;
			};
		});
	}

	// when source card is clicked
	srcClick(srcId) {
		// Change the value on data service to the current clicked source id
		this.data.changeMsg(srcId);
		// Close sidenavbar emiting to the parent where sidenav is
		this.close.emit();
	}

	// Pop-UP the app component when about button is clicked
	openAbout() {
		this.dialog.open(AboutAppComponent);
	}

	// Pop up the rest api component when rest api button is clicked
	openRest() {
		this.dialog.open(AboutRestComponent);
	}
}
