import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private service: SharedService
  ) {
    // console.warn('card detail construtor');
  }

  id: any;
  details: any;

  content: any = [];
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      // console.log(params);
      this.id = params['cardId'];
    });
    this.refreshContentList();
  }
  refreshContentList() {
    this.service.getContent().subscribe((data) => {
      // console.warn('Content', data);
      this.content = data;
      console.log('content', this.content);
      for (let c of this.content) {
        if (this.id == c.id) {
          this.details = c;
          console.log(this.details);
          break;
        } else {
          this.details = false;
          console.log(this.details);
        }
      }
    });
  }
}
