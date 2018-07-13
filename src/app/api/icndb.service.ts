import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

// "@Injectable" allows it to be included in other classes
@Injectable({
  providedIn: 'root'
})
export class IcndbService {

  // services are ALWAYS connected in the constructor
  constructor(
    // our instance of the "HttpClient" service (for making API requests)
    private myHttpServ: HttpClient
  ) { }

  // GET https://api.icndb.com/jokes/random
  getRandom() {
    // return the Promise of the request (components can ".then()" & ".catch()")
    return this.myHttpServ
      .get("https://api.icndb.com/jokes/random")
      .toPromise();
  }

  // GET https://api.icndb.com/jokes/count
  getCount() {
    // return the Promise of the request (components can ".then()" & ".catch()")
    return this.myHttpServ
      .get("https://api.icndb.com/jokes/count")
      .toPromise();
  }

  // GET https://api.icndb.com/categories
  getCategories() {
    // return the Promise of the request (components can ".then()" & ".catch()")
    return this.myHttpServ
      .get("https://api.icndb.com/categories")
      .toPromise();
  }
}

export class Joke {
  id: string;
  joke: string;
  categories: Array<string>;
}
