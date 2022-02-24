import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpetdetailsComponent } from './aboutpetdetails.component';

describe('AboutpetdetailsComponent', () => {
  let component: AboutpetdetailsComponent;
  let fixture: ComponentFixture<AboutpetdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutpetdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpetdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
