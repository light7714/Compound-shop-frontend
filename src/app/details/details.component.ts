import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from '../compound.service';
import { CompoundData } from '../compound-data';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
    <img
        class="listing-photo"
        [src]="compoundData?.ImageSource"
        alt="photo of {{ compoundData?.CompoundName }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ compoundData?.CompoundName }}</h2>
        <!-- <p>add date modified</p> -->
      </section>
      <section class="listing-features">
        <h3 class="section-heading">About this compound</h3>
          <p>{{ compoundData?.CompoundDescription }}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  compoundService = inject(CompoundService);
  compoundData: CompoundData | undefined;
  
  constructor() {
    const compoundId = parseInt(this.route.snapshot.params['id'], 10);
    console.log("compoundId is", compoundId);

    this.compoundService
    .getCompoundById(compoundId)
    .then((result: any) => {
      this.compoundData = result.data;
      console.log(this.compoundData);
    })
  }
}
