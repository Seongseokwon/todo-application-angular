import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
  isLoading = false;
  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
