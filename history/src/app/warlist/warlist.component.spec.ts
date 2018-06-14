import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarlistComponent } from './warlist.component';

describe('WarlistComponent', () => {
  let component: WarlistComponent;
  let fixture: ComponentFixture<WarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
