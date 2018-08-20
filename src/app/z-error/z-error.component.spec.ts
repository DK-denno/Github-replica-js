import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZErrorComponent } from './z-error.component';

describe('ZErrorComponent', () => {
  let component: ZErrorComponent;
  let fixture: ComponentFixture<ZErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
