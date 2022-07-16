import { Component, OnInit } from '@angular/core';

import { interval, observable, Observable, Subscription } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // const customInterval$ = Observable.create(); //已被淘汰
    const customInterval$ = new Observable<number>(observer => {
      let count = 0
      setInterval(() => {
        count++
        observer.next(count);
      }, 1000)
    }); // 改用 new Observable()
    // this.firstObsSubscription = interval(1000).subscribe((count)=>{
    //   console.log(count)
    // })

    this.firstObsSubscription = customInterval$.subscribe((count) => {
      console.log(count);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.firstObsSubscription.unsubscribe();
  }

}
