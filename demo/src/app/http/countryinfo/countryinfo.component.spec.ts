import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryinfoComponent } from './countryinfo.component';

describe('CountryinfoComponent', () => {
  let component: CountryinfoComponent;
  let fixture: ComponentFixture<CountryinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
