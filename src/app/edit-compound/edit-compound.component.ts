import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundData } from '../compound-data';
import { Navigation, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-edit-compound',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="edit-form listing-apply">
      <h2 class="section-heading">Edit a Compound</h2>
      <br />

      <form [formGroup]="editForm" (submit)="submitEdit()">
        <label for="compound-name">Compound Name</label>
        <input
          id="compound-name"
          type="text"
          formControlName="CompoundName"
          [ngModel]="compoundData?.CompoundName"
        />

        <label for="compound-description">Compound Description</label>
        <input
          id="compound-description"
          type="text"
          formControlName="CompoundDescription"
          [ngModel]="compoundData?.CompoundDescription"
        />

        <label for="compound-image-source">Link to image</label>
        <input
          id="compound-image-source"
          type="text"
          formControlName="ImageSource"
          [ngModel]="compoundData?.ImageSource"
        />

        <label for="compound-image-attribution">Image Attribution</label>
        <input
          id="compound-image-attribution"
          type="text"
          formControlName="ImageAttribution"
          [ngModel]="compoundData?.ImageAttribution"
        />

        <button type="submit" class="primary">Edit</button>
      </form>
    </section>
  `,
  styleUrls: ['./edit-compound.component.css'],
})
export class EditCompoundComponent {
  // @Input() compoundData: CompoundData | undefined;
  compoundData: CompoundData | undefined;
  router: Router = inject(Router);
  compoundService: CompoundService = inject(CompoundService);

  editForm = new FormGroup({
    CompoundName: new FormControl(''),
    CompoundDescription: new FormControl(''),
    ImageSource: new FormControl(''),
    ImageAttribution: new FormControl(''),
  });

  constructor() {
    const nav: Navigation | null = this.router.getCurrentNavigation();

    // possibly a case for some error
    if (
      nav &&
      nav.extras &&
      nav.extras.state &&
      nav.extras.state['compoundData']
    ) {
      this.compoundData = nav.extras.state['compoundData'] as CompoundData;
    }
    console.log('inside edit comp', this.compoundData);
  }

  submitEdit() {
    this.compoundService.submitEditForm(
      this.compoundData?.ID ?? 0,
      this.editForm.value.CompoundName ??
        this.compoundData?.CompoundName ??
        'error',
      this.editForm.value.CompoundDescription ??
        this.compoundData?.CompoundDescription ??
        'error',
      this.editForm.value.ImageSource ??
        this.compoundData?.ImageSource ??
        'error',
      this.editForm.value.ImageAttribution ??
        this.compoundData?.ImageAttribution ??
        'error'
    );

    // this.router.navigate(['/']).then(() => {
    //   window.location.href = window.location.protocol + '//' + window.location.host + '/';
    // });
  }
}
