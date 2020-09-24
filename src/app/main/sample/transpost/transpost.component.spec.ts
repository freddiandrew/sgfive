import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspostComponent } from './transpost.component';

describe('TranspostComponent', () => {
  let component: TranspostComponent;
  let fixture: ComponentFixture<TranspostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
