import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.scss']
})
export class AddvideoComponent implements OnInit {
  addVideoForm: FormGroup;
  games: string[];
  players: Player[];

  constructor(private fb: FormBuilder, private contentService: ContentService) {
    this.addVideoForm = this.fb.group({
      title: ['', Validators.required],
      player: ['', Validators.required],
      url: ['', Validators.required],
      game: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.games = this.contentService.getGames();
    this.players = this.contentService.getPlayers();
  }

  getErrorMessage() {
    return "This field is required.";
  }

}
