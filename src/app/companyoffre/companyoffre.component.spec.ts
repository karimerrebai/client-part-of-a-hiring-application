import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyoffreComponent } from './companyoffre.component';

describe('CompanyoffreComponent', () => {
  let component: CompanyoffreComponent;
  let fixture: ComponentFixture<CompanyoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyoffreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
