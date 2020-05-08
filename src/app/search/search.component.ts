import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit {
	constructor(private config: ConfigService) {}
	err;
	@ViewChild('search') input: ElementRef;

	ngOnInit(): void {}

	article;
	topic;
	letter = false;
	other = true;
	onEnter() {
		if (this.topic && this.topic.length > 0) {
			this.letter = false;

			this.config.getSearch(this.topic).subscribe((data) => {
				this.article = data;
				(err) => {
					this.err = err;
				};
			});

			this.input.nativeElement.blur();
			this.input.nativeElement.style.boxShadow = 'none';
		} else {
			this.letter = true;
			this.other = false;
		}
	}

	func() {
		if (this.topic && this.topic.length > 0) {
			this.config.getSearch(this.topic).subscribe((data) => {
				this.article = data;
				(err) => {
					this.err = err;
				};
			});
		}
	}
}
