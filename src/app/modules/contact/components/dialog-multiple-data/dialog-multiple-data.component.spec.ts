import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMultipleDataComponent } from './dialog-multiple-data.component';

describe('DialogDataComponent', () => {
  let component: DialogMultipleDataComponent;
  let fixture: ComponentFixture<DialogMultipleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMultipleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMultipleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
