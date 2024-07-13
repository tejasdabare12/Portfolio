import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedResumeTemplateComponent } from './shared-resume-template.component';

describe('SharedResumeTemplateComponent', () => {
  let component: SharedResumeTemplateComponent;
  let fixture: ComponentFixture<SharedResumeTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedResumeTemplateComponent]
    });
    fixture = TestBed.createComponent(SharedResumeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
