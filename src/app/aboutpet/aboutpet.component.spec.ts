import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpetComponent } from './aboutpet.component';

describe('AboutpetComponent', () => {
  let component: AboutpetComponent;
  let fixture: ComponentFixture<AboutpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutpetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
