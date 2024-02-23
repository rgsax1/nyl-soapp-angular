import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaintenanceMechanicalComponent } from './list-maintenance-mechanical.component';

describe('ListMaintenanceMechanicalComponent', () => {
  let component: ListMaintenanceMechanicalComponent;
  let fixture: ComponentFixture<ListMaintenanceMechanicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMaintenanceMechanicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMaintenanceMechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
