import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

interface showsType {
  id: number;
  Name: String;
  Category: String;
  Genre: String;
  PhotoFile: String;
}

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  // content: any = [];
  shows: showsType[] = [];

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshShowList();
  }

  refreshShowList() {
    this.service.getShows().subscribe((data) => {
      this.shows = data;
    });
  }
}
