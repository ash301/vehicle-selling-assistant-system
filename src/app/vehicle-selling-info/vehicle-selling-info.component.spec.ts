import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSellingInfoComponent } from './vehicle-selling-info.component';

describe('VehicleSellingInfoComponent', () => {
  let component: VehicleSellingInfoComponent;
  let fixture: ComponentFixture<VehicleSellingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSellingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSellingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
