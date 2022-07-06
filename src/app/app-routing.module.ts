import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
// import { HomeComponent } from './components/home/home.component';
// import { CardComponent } from './components/card/card.component';
import { BodyComponent } from './components/body/body.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShowsComponent } from './components/shows/shows.component';
import { GenreComponent } from './components/genre/genre.component';
import { GenreItemComponent } from './components/genre-item/genre-item.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/card/:cardId', component: CardDetailComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'shows/card/:cardId', component: CardDetailComponent },
  { path: 'card/:cardId', component: CardDetailComponent },
  { path: 'genre', component: GenreComponent },
  { path: 'genre/:genreName', component: GenreItemComponent },
  { path: 'genre/:genreName/card/:cardId', component: CardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
