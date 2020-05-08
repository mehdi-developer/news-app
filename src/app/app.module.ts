import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { DataService } from './data.service';
import { ConfigService } from './config.service';

import { CatComponent } from './cat/cat.component';
import { LatestComponent } from './latest/latest.component';
import { SearchComponent } from './search/search.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { SourceComponent } from './source/source.component';
import { AboutRestComponent } from './about-rest/about-rest.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { CategoryComponent } from './category/category.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		NavTabsComponent,
		CatComponent,
		LatestComponent,
		SearchComponent,
		SidenavListComponent,
		AboutAppComponent,
		SourceComponent,
		AboutRestComponent,
		LatestArticleComponent,
		CategoryComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		BrowserAnimationsModule,
		FormsModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [ DataService, ConfigService ],
	bootstrap: [ AppComponent ],
	entryComponents: [ AboutAppComponent ]
})
export class AppModule {}
