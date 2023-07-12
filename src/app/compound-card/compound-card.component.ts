import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundData } from '../compound-data';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-compound-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="compoundData.ImageSource"
        alt="photo of {{ compoundData.CompoundName }}"
      />
      <h2 class="listing-heading">{{ compoundData.CompoundName }}</h2>
      <!-- can add description here -->
      <!-- <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p> -->
      <!-- The routerLink directive enables Angular's router to create dynamic links in the application. The value assigned to the routerLink is an array with two entries: the static portion of the path and the dynamic data. -->
      <a [routerLink]="['/details', compoundData.ID]">See More</a>
    </section>
  `,
  styleUrls: ['./compound-card.component.css']
})
export class CompoundCardComponent {
  @Input() compoundData!: CompoundData;
}
