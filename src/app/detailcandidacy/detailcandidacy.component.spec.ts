import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcandidacyComponent } from './detailcandidacy.component';

describe('DetailcandidacyComponent', () => {
  let component: DetailcandidacyComponent;
  let fixture: ComponentFixture<DetailcandidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcandidacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcandidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
