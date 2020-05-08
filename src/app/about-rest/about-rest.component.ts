import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-about-rest',
	templateUrl: './about-rest.component.html',
	styleUrls: [ './about-rest.component.scss' ]
})
export class AboutRestComponent implements OnInit {
	close() {
		this.dialogRef.close();
	}
	constructor(private dialogRef: MatDialogRef<AboutRestComponent>) {}

	ngOnInit(): void {}
}
