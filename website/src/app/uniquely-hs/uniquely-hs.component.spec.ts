import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquelyHsComponent } from './uniquely-hs.component';

describe('UniquelyHsComponent', () => {
  let component: UniquelyHsComponent;
  let fixture: ComponentFixture<UniquelyHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquelyHsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniquelyHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
