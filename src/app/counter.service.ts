import { Injectable } from '@angular/core';

// "@Injectable" allows it to be included in other classes
@Injectable({
  providedIn: 'root'
})
export class CounterService {
  currentCount: number = 0;
  timerId: number;

  constructor() { }

  getCount() {
    return this.currentCount;
  }

  increment() {
    this.currentCount += 1;
  }

  decrement() {
    this.currentCount -= 1;
  }

  zero() {
    this.currentCount = 0;
  }

  start() {
    this.timerId =
      setInterval(() => {
        this.increment();
      }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }
}
