import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLinkComponent } from './city-link.component';

describe('CityLinkComponent', () => {
  let component: CityLinkComponent;
  let fixture: ComponentFixture<CityLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
