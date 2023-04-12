import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KITproductComponent } from './kitproduct.component';

describe('KITproductComponent', () => {
  let component: KITproductComponent;
  let fixture: ComponentFixture<KITproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KITproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KITproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
