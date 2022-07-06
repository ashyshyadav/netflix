import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  content: any = [];
  searchString: string = '';
  showData: boolean = false;
  result: any = [];
  cardId: any[] = [];
  constructor(private service: SharedService) {}

  ngOnInit(): void {
    this.refreshContentList();
  }

  refreshContentList() {
    this.service.getContent().subscribe((data) => {
      this.content = data;
      // console.warn(this.content);
    });
  }

  handleSearch(e: any) {
    this.searchString.concat(e.key);
    this.result = [];
    console.warn('before-loop', this.result);
    for (let content of this.content) {
      console.log('serach', this.searchString);
      // console.log('content', content.Name);
      if (content.Name.includes(this.searchString) && this.searchString != '') {
        console.warn(
          'true search==' + this.searchString + 'content' + content.Name
        );
        this.result.push(content);
        console.log('push result---', this.result);
        console.warn(this.searchString);
      }
    }
  }
}
