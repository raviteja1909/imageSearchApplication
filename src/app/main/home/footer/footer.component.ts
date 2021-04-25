import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  presentYear: number;

  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.presentYear = date.getFullYear();
  }

}
