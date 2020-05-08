import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigService } from '../config.service';

@Component({
	selector: 'app-source',
	templateUrl: './source.component.html',
	styleUrls: [ './source.component.scss' ]
})
export class SourceComponent implements OnInit, DoCheck {
	constructor(private data: DataService, private config: ConfigService) {}

	srcData: any;
	srcId;

	ngDoCheck() {
		// When any change happens in the component if the source recieved from the data service is not equal
		// to the source id in the json received from config service then run getSources() again so json data is equal
		// to the source data recieved from the data service
		const src = this.srcData && this.srcData.articles && this.srcData.articles[0].source.id;
		if (this.srcId !== src) {
			this.getSources();
		}
	}

	ngOnInit(): void {
		// Get the source name from data service which is sent when the source in the sidebar is clicked
		// and set that value to srcId then call getSources()
		this.data.currentMsg.subscribe((data) => {
			this.srcId = data;
		});
		this.getSources();
	}

	getSources() {
		// Get json data which has the id of source
		this.config.getSrc(this.srcId).subscribe((data) => {
			this.srcData = data;
		});
	}
}
