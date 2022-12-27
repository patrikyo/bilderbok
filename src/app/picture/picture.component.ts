import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public speak(word: string) {
    const audioPlayer: HTMLAudioElement = document.querySelector(
      '#audio'
    ) as HTMLAudioElement;
    switch (word) {
      case 'gunga':
        audioPlayer.play();
    }
  }
}
