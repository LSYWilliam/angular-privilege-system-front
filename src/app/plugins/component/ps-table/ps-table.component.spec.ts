import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsTableComponent } from './ps-table.component';

describe('PsTableComponent', () => {
  let component: PsTableComponent;
  let fixture: ComponentFixture<PsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
