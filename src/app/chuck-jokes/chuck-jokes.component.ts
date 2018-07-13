import { Component, OnInit } from '@angular/core';
import { IcndbService, Joke } from '../api/icndb.service';

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.css']
})
export class ChuckJokesComponent implements OnInit {
  jokes: Array<Joke> = [];

  constructor(
    private myIcndbApiServ: IcndbService
  ) { }

  ngOnInit() {
    this.getAJoke();
  }

  getAJoke() {
    this.myIcndbApiServ.getRandom()
      .then((response: any) => {
        console.log("Random joke API response", response);

        // connects the DATA from the API to the COMPONENT state
        this.jokes.push(response.value);
      })
      .catch((err) => {
        alert("There was a problem getting the jokes. 💩");
        console.log(err);
      });
  }
}
