import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Video } from 'src/app/models/video';
import { MenuService } from 'src/app/services/menu.service';
import { DomSanitizer } from '@angular/platform-browser';
import Shuffle from 'shufflejs';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.scss']
})
export class VideogalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('shuffleContainer') private shuffleContainer: ElementRef;
  @ViewChild('shuffleSizer') private shuffleSizer: ElementRef;
  @ViewChildren(MatExpansionPanel) expansionPanels: QueryList<MatExpansionPanel>;
  private shuffleInstance: Shuffle;
  videos: Video[];
  games = ['COD2', 'CODMW', 'APEX'];
  players = ['BENNIEMAN', 'KUBEROAL', 'MARTINZIKI', 'ROEL', 'BLOKTASTIC', 'PANINI', 'WARHEAD', 'KRAAKY'];
  activeFilters = {
    games: [],
    players: [],
  };

  constructor(private menuService: MenuService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videos = this.menuService.getVideos();
  }

  ngAfterViewInit(): void {
    this.shuffleInstance = new Shuffle(this.shuffleContainer.nativeElement, {
      itemSelector: '.shuffle-item',
      sizer: this.shuffleSizer.nativeElement
    });
  }

  closeExpansionPanels() {
    this.expansionPanels.forEach(p => p.close());
  }

  // Clear filters and reset
  resetFilters(): void {
    this.activeFilters.games = [];
    this.activeFilters.players = [];
    this.shuffleInstance.filter();
  }

  updateFilters() {
    // Apply filter
    this.shuffleInstance.filter((element: Element) => {
      return this.itemPassesFilters(element);
    });
  }

  // Check if item passes current filters
  itemPassesFilters(element): boolean {
    var games = this.activeFilters.games;
    var players = this.activeFilters.players;
    var game = element.getAttribute('data-game');
    var player = element.getAttribute('data-player');
    // Games
    if (games.length > 0 && !games.includes(game)) {
      return false;
    }
    // Players
    if (players.length > 0 && !players.includes(player)) {
      return false;
    }

    return true;
  }

}
