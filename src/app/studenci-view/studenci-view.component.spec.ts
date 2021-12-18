import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenciViewComponent } from './studenci-view.component';

describe('StudenciViewComponent', () => {
  let component: StudenciViewComponent;
  let fixture: ComponentFixture<StudenciViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenciViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenciViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
