import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-images-cards',
  templateUrl: './images-cards.component.html',
  styleUrls: ['./images-cards.component.scss'],
})
export class ImagesCardsComponent implements OnInit, AfterViewInit {
  @Input() images!: imageData[];
  @ViewChild('container') container!: ElementRef;

  imagesSplited!: imageData[];

  constructor() {}
  ngAfterViewInit(): void {
    const vw = this.container.nativeElement.offsetWidth;

    console.log('vw', vw);
  }

  ngOnInit(): void {}
}
