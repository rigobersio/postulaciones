import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoColorComponent } from './texto-color.component';

describe('TextoColorComponent', () => {
  let component: TextoColorComponent;
  let fixture: ComponentFixture<TextoColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
