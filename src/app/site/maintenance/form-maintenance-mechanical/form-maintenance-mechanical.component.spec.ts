import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaintenanceMechanicalComponent } from './form-maintenance-mechanical.component';

describe('FormMaintenanceMechanicalComponent', () => {
  let component: FormMaintenanceMechanicalComponent;
  let fixture: ComponentFixture<FormMaintenanceMechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMaintenanceMechanicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMaintenanceMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
