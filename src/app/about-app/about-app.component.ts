import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-about-app',
	templateUrl: './about-app.component.html',
	styleUrls: [ './about-app.component.scss' ]
})
export class AboutAppComponent implements OnInit {
	// Close pop up when button is close is clicked
	close() {
		this.dialogRef.close();
	}

	constructor(private dialogRef: MatDialogRef<AboutAppComponent>) {}

	ngOnInit(): void {}
}
