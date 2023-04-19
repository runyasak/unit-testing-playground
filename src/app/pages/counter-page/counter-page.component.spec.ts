import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPageComponent } from './counter-page.component';

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click and count to 1', () => {
    const incrementButton = fixture.debugElement.nativeElement.querySelector(
      `[data-testid='increment']`
    );

    incrementButton.click();

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toMatch(/Counter: 1/i);
  });
});
