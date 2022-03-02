import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  isLoading = false;
  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = true;
      this.router.navigate(['account/login']);
    }, 3000)
  }

}
