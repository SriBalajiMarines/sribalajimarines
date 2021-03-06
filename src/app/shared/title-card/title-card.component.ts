import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit {
  @Input() header: string;
  constructor() { }

  ngOnInit(): void {
  }
}
