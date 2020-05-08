import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestComponent } from './latest/latest.component';
import { SearchComponent } from './search/search.component';
import { CatComponent } from './cat/cat.component';
import { SourceComponent } from './source/source.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
	{ path: '', redirectTo: '/latest', pathMatch: 'full' },
	{ path: 'latest', component: LatestComponent, data: { state: 'latest' } },
	{ path: 'search', component: SearchComponent, data: { state: 'search' } },
	{ path: 'categories', component: CatComponent, data: { state: 'categories' } },
	{ path: 'categories/:id', component: CategoryComponent, data: { state: 'categories/:id' } },
	{ path: 'source/:id', component: SourceComponent, data: { state: 'source' } }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
