import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipmentComponent } from './form-equipment.component';

describe('FormEquipmentComponent', () => {
  let component: FormEquipmentComponent;
  let fixture: ComponentFixture<FormEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
