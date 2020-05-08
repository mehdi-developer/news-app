import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
	selector: 'app-cat',
	templateUrl: './cat.component.html',
	styleUrls: [ './cat.component.scss' ]
})
export class CatComponent implements OnInit {
	// When any category is clicked it passes theyre topic name
	// to the data service so the category component recieves it
	// from data service
	sendTopic(topic) {
		this.data.changeTopic(topic);
	}

	constructor(private data: DataService) {}

	ngOnInit(): void {}
}
