import { Component, OnInit } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loadign',
  templateUrl: './loadign.component.html',
  styles: [],
})
export class LoadignComponent implements OnInit {
  faSyncIcon = faSync;

  constructor() {}

  ngOnInit(): void {}
}
