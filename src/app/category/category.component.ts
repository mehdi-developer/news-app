import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: [ './category.component.scss' ]
})
export class CategoryComponent implements OnInit {
	article;
	topic;
	err;
	constructor(private data: DataService, private config: ConfigService, private loc: Location) {}

	// Recieve topic and send it to config service to get the
	// json data related

	ngOnInit(): void {
		this.topic = this.data.currentTopic;
		this.config.getCat(this.topic).subscribe((data) => {
			this.article = data;
			(err) => {
				this.err = err;
			};
		});
	}

	back() {
		this.loc.back();
	}
}
