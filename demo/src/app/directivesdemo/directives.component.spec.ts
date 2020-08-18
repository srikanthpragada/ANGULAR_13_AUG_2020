import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesdemoComponent } from './directives.component';

describe('DirectivesdemoComponent', () => {
  let component: DirectivesdemoComponent;
  let fixture: ComponentFixture<DirectivesdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
