import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheteamComponent } from './theteam.component';

describe('TheteamComponent', () => {
  let component: TheteamComponent;
  let fixture: ComponentFixture<TheteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheteamComponent]
    });
    fixture = TestBed.createComponent(TheteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
