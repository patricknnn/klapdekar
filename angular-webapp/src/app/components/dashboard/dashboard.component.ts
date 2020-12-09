import { Component, OnInit } from '@angular/core';
import { Iconcard } from 'src/app/models/iconCard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public iconCards: Iconcard[];

  constructor() {
    this.iconCards = [
      new Iconcard("59", "Klappers gemaakt", "show_chart", "Tevens het nummer van een verse tt bij Ali b", ""),
    ]
  }

  ngOnInit(): void {
  }

}
