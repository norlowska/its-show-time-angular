import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchForm = new FormGroup({
    query: new FormControl('')
  });
  constructor(private router: Router) {}

  onSubmit() {
      this.router.navigate(['/search'], { queryParams: { title: this.searchForm.value.query } });
  }

}
