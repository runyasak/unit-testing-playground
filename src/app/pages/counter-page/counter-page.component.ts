import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
