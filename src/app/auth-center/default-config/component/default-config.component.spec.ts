import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultConfigComponent } from './default-config.component';

xdescribe('DefaultConfigComponent', () => {
  let component: DefaultConfigComponent;
  let fixture: ComponentFixture<DefaultConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
