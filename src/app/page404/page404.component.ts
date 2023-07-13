import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      This page doesn't exist! Ensure you entered correct URL.
</h1>
  `,
  styleUrls: ['./page404.component.css']
})
export class Page404Component {

}
