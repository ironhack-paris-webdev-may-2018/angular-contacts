import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-manage-count-page',
  templateUrl: './manage-count-page.component.html',
  styleUrls: ['./manage-count-page.component.css']
})
export class ManageCountPageComponent implements OnInit {

  // services are ALWAYS connected in the constructor
  constructor(
    // our instance of the "CounterService" class (for access to "currentCount")
    public myCounterServ: CounterService
  ) { }

  ngOnInit() {
  }

  plusFive() {
    // use service's increment() method
    this.myCounterServ.increment();
    this.myCounterServ.increment();
    this.myCounterServ.increment();
    this.myCounterServ.increment();
    this.myCounterServ.increment();
  }

  minusFive() {
    // use service's decrement() method
    this.myCounterServ.decrement();
    this.myCounterServ.decrement();
    this.myCounterServ.decrement();
    this.myCounterServ.decrement();
    this.myCounterServ.decrement();
  }

  reset() {
    // use service's zero() method
    this.myCounterServ.zero();
  }
}
