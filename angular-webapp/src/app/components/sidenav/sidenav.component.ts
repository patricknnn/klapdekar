import { Component, OnInit } from '@angular/core';
import { Navlink } from 'src/app/models/navlink';
import { ContentService } from 'src/app/services/content.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public navlinks: Navlink[];
  public simplebarOptions: object;

  constructor(
    private contentService: ContentService,
    private sidenavService: SidenavService
  ) {
    this.simplebarOptions = { autoHide: true };
  }

  ngOnInit(): void {
    this.navlinks = this.contentService.getNavlinks();
  }

  closeSidenav(): void {
    this.sidenavService.close();
  }

}
