import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  content: any = [];
  movies: any = [];

  constructor(private service: SharedService) {
    this.refreshMovieList();
  }

  ngOnInit(): void {
    this.refreshMovieList();
    // this.onlyMovies();
  }

  // onlyMovies() {
  //   this.movies = this.content.filter((obj: any) => {
  //     return obj.Category == 'movie';
  //   });
  //   console.log('movies ', this.movies);
  // }

  refreshMovieList() {
    this.service.getMovies().subscribe((data) => {
      this.movies = data;
      // console.log(data);
      // this.onlyMovies();
    });
  }
}
