import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <main>
        <header class="brand-name">
          <a class="heading" [routerLink]="['/']">
            <img
              class="brand-logo"
              src="/assets/logo.svg"
              alt="logo"
              aria-hidden="true"
              height="40"
              width="40"
            />
            <div class="title">Compound Shop</div>
          </a>
        </header>
      <!-- header comp here -->
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'compound-shop';
  
}
