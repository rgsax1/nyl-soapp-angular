import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaintenanceElectricalComponent } from './form-maintenance-electrical.component';

describe('FormMaintenanceElectricalComponent', () => {
  let component: FormMaintenanceElectricalComponent;
  let fixture: ComponentFixture<FormMaintenanceElectricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMaintenanceElectricalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMaintenanceElectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
