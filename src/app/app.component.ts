import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // services are ALWAYS connected in the constructor
  constructor(
    // our instance of the "CounterService" class (for access to "currentCount")
    public myCounterServ: CounterService
  ) { }

  ngOnInit() {
    // use service's start() method
    this.myCounterServ.start();
  }

  ngOnDestroy() {
    // use service's stop() method
    this.myCounterServ.stop();
  }
}
