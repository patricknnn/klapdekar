import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { navlinks, videos } from '../MOCKS';
import { Navlink } from '../models/navlink';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  getNavlinks(): Navlink[] {
    return navlinks;
  }

  getVideos(): Video[] {
    return videos;
  }
}
