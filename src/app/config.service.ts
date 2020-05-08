import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class ConfigService {
	constructor(private http: HttpClient, private data: DataService) {}

	// API KEY for news rest api change it sometime later for a new one
	api = '&apiKey=23791b6425874df0a5c725aee2510a15';

	// Url for all the sources names which sidenav list uses it show sources names and logos
	urlSources = 'https://newsapi.org/v2/sources?language=en';

	// Url for search
	urlSearch = 'https://newsapi.org/v2/everything?q=';

	// Url for categories
	urlCat = 'https://newsapi.org/v2/top-headlines?country=us&category=';

	// Url for specific source
	urlSrc = 'https://newsapi.org/v2/top-headlines?sources=';

	// Url for latest
	urlLatest = 'https://newsapi.org/v2/top-headlines?country=us';

	// Get Latest
	getLatest() {
		return this.http.get(this.urlLatest + this.api).pipe(catchError(this.errorHandler));
	}

	// Get all the source names
	getSources() {
		return this.http.get(this.urlSources + this.api).pipe(catchError(this.errorHandler));
	}

	// Get the source json
	getSrc(src) {
		return this.http.get(this.urlSrc + src + this.api).pipe(catchError(this.errorHandler));
	}

	// Get Categegory
	getCat(topic) {
		return this.http.get(this.urlCat + topic.source._value + this.api).pipe(catchError(this.errorHandler));
	}

	// Get Search
	getSearch(search) {
		return this.http.get(this.urlSearch + search + this.api).pipe(catchError(this.errorHandler));
	}

	errorHandler(err) {
		return throwError('Please check your internet conncetion');
	}
}
