import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
	selector: 'app-latest',
	templateUrl: './latest.component.html',
	styleUrls: [ './latest.component.scss' ]
})
export class LatestComponent implements OnInit {
	article;
	err;
	constructor(private config: ConfigService) {}

	ngOnInit(): void {
		this.config.getLatest().subscribe((data) => {
			this.article = data;
			(err) => {
				this.err = err;
			};
		});
	}
}
