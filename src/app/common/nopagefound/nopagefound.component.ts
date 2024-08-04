import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.scss']
})
export class NopagefoundComponent implements OnInit {

  year: number;
  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
  
}
