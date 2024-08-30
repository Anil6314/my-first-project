import { Component } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { app } from '../../server';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-project';

  constructor() {}

  showsearchresult() {
    const searchResult = document.getElementById('search_container');

    console.log(searchResult);

    searchResult?.classList.remove('hidden');


  
  }
}

