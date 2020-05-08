import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor() {}

	// Sidenav source id
	private msgSrc = new BehaviorSubject<string>('');
	currentMsg = this.msgSrc.asObservable();
	// Change sidenav source id
	changeMsg(m) {
		this.msgSrc.next(m);
	}

	// Category topic
	private topicSrc = new BehaviorSubject<string>('');
	currentTopic = this.topicSrc.asObservable();

	// Change category topic
	changeTopic(m) {
		this.topicSrc.next(m);
	}
}
