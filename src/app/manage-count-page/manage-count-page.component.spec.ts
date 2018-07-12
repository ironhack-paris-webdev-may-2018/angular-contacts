import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCountPageComponent } from './manage-count-page.component';

describe('ManageCountPageComponent', () => {
  let component: ManageCountPageComponent;
  let fixture: ComponentFixture<ManageCountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
