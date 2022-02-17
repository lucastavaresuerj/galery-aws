import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Directive({
  selector: '[autoExpand]',
})
export class AutoExpandDirective implements OnInit {
  baseScroll!: number;

  @Input('min-rows') minRows = 1;
  @Input('max-rows') maxRows: number = Infinity;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    (this.el.nativeElement as HTMLElement).addEventListener(
      'input',
      this.resizeVerticaly.bind(this)
    );
  }

  // resizeVerticaly(ev: KeyboardEvent) {
  //   const el = this.el.nativeElement as HTMLElement;
  //   el.style.height = `${el.scrollHeight}px`;
  //   console.log(el.style.height);
  //   return;
  // }

  getBaseScroll(el: HTMLElement) {
    if (!this.baseScroll) {
      const value = el.getAttribute('value') || '';
      el.setAttribute('value', '');
      this.baseScroll = el.scrollHeight;
      el.setAttribute('value', value);
    }
  }

  resizeVerticaly(ev: Event) {
    const el = this.el.nativeElement as HTMLElement;

    this.getBaseScroll(el);
    const fontSize = window.getComputedStyle(el).getPropertyValue('font-size');
    const fontSizeNumber = parseFloat(fontSize.replace(/(\d+).*/g, '$1'));

    el.setAttribute('rows', `${this.minRows}`);
    const scrollHeight = el.scrollHeight;

    const rows = Math.floor(
      (scrollHeight - this.baseScroll) / (fontSizeNumber * 1.4)
    );

    const newRows = rows + this.minRows;

    el.setAttribute(
      'rows',
      `${newRows > this.maxRows ? this.maxRows : newRows}`
    );
  }
}
