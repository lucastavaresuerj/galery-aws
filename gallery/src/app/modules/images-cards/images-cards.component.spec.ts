import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCardsComponent } from './images-cards.component';

describe('ImagesCardsComponent', () => {
  let component: ImagesCardsComponent;
  let fixture: ComponentFixture<ImagesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
