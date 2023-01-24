import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttoSpeechComponent } from './textto-speech.component';

describe('TexttoSpeechComponent', () => {
  let component: TexttoSpeechComponent;
  let fixture: ComponentFixture<TexttoSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexttoSpeechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexttoSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
