import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  value: string;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onKey(event: any) {
    this.value = event.target.value;
    if (this.value === '') {
      this.route.navigate(['']);
    } else {
      this.route.navigate([`search/${this.value}`]);
    }
  }
}
