import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operator/map';
@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss']
})
export class HomeWrapperComponent implements OnInit {

  constructor(private http: Http, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // let url = 'http://localhost:4200/' + this.activatedRoute.snapshot.url;
    // this.http.get(url)
    //   .subscribe(
    //     res => console.log(res.json())
    //   )

  }

}
