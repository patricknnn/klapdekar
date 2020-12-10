import { Injectable } from '@angular/core';
import { Games, navlinks, players, videos } from '../MOCKS';
import { Navlink } from '../models/navlink';
import { Player } from '../models/player';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getNavlinks(): Navlink[] {
    return navlinks;
  }

  getVideos(): Video[] {
    return videos;
  }

  getPlayers(): Player[] {
    return players;
  }

  getGames(): string[] {
    return Games;
  }
}
