import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipmentGeneralComponent } from './list-equipment-general.component';

describe('ListEquipmentGeneralComponent', () => {
  let component: ListEquipmentGeneralComponent;
  let fixture: ComponentFixture<ListEquipmentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEquipmentGeneralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEquipmentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
