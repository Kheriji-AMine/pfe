import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementSecComponent } from './departement-sec.component';

describe('DepartementSecComponent', () => {
  let component: DepartementSecComponent;
  let fixture: ComponentFixture<DepartementSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
