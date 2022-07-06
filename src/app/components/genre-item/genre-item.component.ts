import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css'],
})
export class GenreItemComponent implements OnInit {
  genre: any;
  dataList: any = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private service: SharedService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      this.genre = params['genreName'];
      console.warn(this.genre);
    });
    if (this.genre == 'comedy') {
      this.refreshComedyList();
    } else if (this.genre == 'drama') {
      this.refreshDramaList();
    } else if (this.genre == 'action') {
      this.refreshActionList();
    } else if (this.genre == 'romcom') {
      this.refreshRomcomList();
    }
  }

  refreshComedyList() {
    this.service.getComedy().subscribe((data) => {
      console.warn('Content', data);
      this.dataList = data;
    });
  }
  refreshDramaList() {
    this.service.getDrama().subscribe((data) => {
      // console.warn('Content', data)
      this.dataList = data;
    });
  }
  refreshActionList() {
    this.service.getAction().subscribe((data) => {
      // console.warn('Content', data)
      this.dataList = data;
    });
  }
  refreshRomcomList() {
    this.service.getRomcom().subscribe((data) => {
      // console.warn('Content', data)
      this.dataList = data;
    });
  }
}
