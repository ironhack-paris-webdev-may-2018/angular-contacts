import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public myCounterServ: CounterService
  ) { }

  ngOnInit() {
    this.myCounterServ.start();
  }

  ngOnDestroy() {
    this.myCounterServ.stop();
  }
}
