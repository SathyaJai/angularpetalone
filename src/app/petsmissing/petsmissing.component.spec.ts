import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsmissingComponent } from './petsmissing.component';

describe('PetsmissingComponent', () => {
  let component: PetsmissingComponent;
  let fixture: ComponentFixture<PetsmissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetsmissingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsmissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
