import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontInvernaderoComponent } from './front-invernadero.component';

describe('FrontInvernaderoComponent', () => {
  let component: FrontInvernaderoComponent;
  let fixture: ComponentFixture<FrontInvernaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontInvernaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontInvernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
