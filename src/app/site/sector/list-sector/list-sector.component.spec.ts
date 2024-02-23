import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectorComponent } from './list-sector.component';

describe('ListSectorComponent', () => {
  let component: ListSectorComponent;
  let fixture: ComponentFixture<ListSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
