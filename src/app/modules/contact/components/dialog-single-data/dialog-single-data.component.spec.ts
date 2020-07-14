import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSingleDataComponent } from './dialog-single-data.component';

describe('DialogDataComponent', () => {
  let component: DialogSingleDataComponent;
  let fixture: ComponentFixture<DialogSingleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSingleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSingleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
