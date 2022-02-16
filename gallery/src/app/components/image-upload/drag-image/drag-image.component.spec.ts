import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragImageComponent } from './drag-image.component';

describe('DragImageComponent', () => {
  let component: DragImageComponent;
  let fixture: ComponentFixture<DragImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
