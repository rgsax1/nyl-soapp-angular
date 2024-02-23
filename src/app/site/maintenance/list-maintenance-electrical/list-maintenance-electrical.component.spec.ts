import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaintenanceElectricalComponent } from './list-maintenance-electrical.component';

describe('ListMaintenanceElectricalComponent', () => {
  let component: ListMaintenanceElectricalComponent;
  let fixture: ComponentFixture<ListMaintenanceElectricalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMaintenanceElectricalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMaintenanceElectricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
