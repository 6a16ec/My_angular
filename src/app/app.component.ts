import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cooking book';

  setActive(event: any) {
    let el = event.target.closest('a');
    let actives = event.target.closest('div').children;
    for (let active of actives) {
      active.classList.remove("active");
    }
    el.classList.add('active');
  }
}
