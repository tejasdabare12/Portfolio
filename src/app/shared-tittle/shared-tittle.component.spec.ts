import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTittleComponent } from './shared-tittle.component';

describe('SharedTittleComponent', () => {
  let component: SharedTittleComponent;
  let fixture: ComponentFixture<SharedTittleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedTittleComponent]
    });
    fixture = TestBed.createComponent(SharedTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
