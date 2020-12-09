import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string;

  constructor(
    private sidenav: SidenavService,
  ) { 
  }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
