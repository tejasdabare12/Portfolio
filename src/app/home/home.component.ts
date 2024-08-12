import { Component, OnDestroy, OnInit } from '@angular/core';
import { CentralSeviceService } from '../Services/central-sevice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription = new Subscription();

  constructor(private central: CentralSeviceService) {}

  ngOnInit() {
    this.receiveData();
  }

  receiveData() {
    this.dataSubscription = this.central.data$.subscribe(data => {
      this.processData(data);
    });
  }

  processData(data: any) {
    const element = document.getElementById(data);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
