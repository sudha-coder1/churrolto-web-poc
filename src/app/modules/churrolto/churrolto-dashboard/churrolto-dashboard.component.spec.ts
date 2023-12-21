import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurroltoDashboardComponent } from './churrolto-dashboard.component';

describe('ChurroltoDashboardComponent', () => {
  let component: ChurroltoDashboardComponent;
  let fixture: ComponentFixture<ChurroltoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChurroltoDashboardComponent]
    });
    fixture = TestBed.createComponent(ChurroltoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
