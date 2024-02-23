import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipmentGeneralComponent } from './form-equipment-general.component';

describe('FormEquipmentGeneralComponent', () => {
  let component: FormEquipmentGeneralComponent;
  let fixture: ComponentFixture<FormEquipmentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEquipmentGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEquipmentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
