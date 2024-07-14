import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSkillsTemplateComponent } from './shared-skills-template.component';

describe('SharedSkillsTemplateComponent', () => {
  let component: SharedSkillsTemplateComponent;
  let fixture: ComponentFixture<SharedSkillsTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedSkillsTemplateComponent]
    });
    fixture = TestBed.createComponent(SharedSkillsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
