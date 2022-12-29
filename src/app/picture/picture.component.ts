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
      `#${word}`
    ) as HTMLAudioElement;
    switch (word) {
      case 'gunga':
        audioPlayer.play();
        break;
      case 'skog':
        audioPlayer.play();
        break;
      case 'vatten':
        audioPlayer.play();
        break;
      case 'lekplats':
        audioPlayer.play();
        break;
      case 'buss':
        audioPlayer.play();
        break;
      case 'bil':
        audioPlayer.play();
    }
  }
}
