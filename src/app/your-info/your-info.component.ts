import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.component.html',
  styleUrls: ['./your-info.component.scss']
})
export class YourInfoComponent implements OnInit {

  responseArr: any = {};
  response: any;

  getConfig() {
    this.http.get('https://testapicrone1331.000webhostapp.com/').subscribe((response) => {
      this.response = response;
      this.responseArr = JSON.parse(this.response);
  });
}
  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
    this.getConfig();
  }


}


