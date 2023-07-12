import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompoundCardComponent } from '../compound-card/compound-card.component';
import { CompoundData } from '../compound-data';
import { CompoundService } from '../compound.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CompoundCardComponent],
  template: `
    <section class="results">
      <app-compound-card
        *ngFor="let compoundData of compoundDataList"
        [compoundData]="compoundData"
      ></app-compound-card>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // compoundDataList: CompoundData[] = [
  //   {
  //     ID: 1,
  //     CompoundName: "Ammonium",
  //     CompoundDescription: "This is ammonium",
  //     ImageSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Ammonium-2D.svg/1200px-Ammonium-2D.svg.png",
  //     ImageAttribution: "hello hunny bunny",
  //     DateModified: "2016-07-18 22:06:00"
  //   }
  // ];
  compoundDataList: CompoundData[] = [];
  compoundService: CompoundService = inject(CompoundService);

  constructor() {
    // window.location.reload();
    this.compoundService.getAllCompounds().then((result: any) => {
      this.compoundDataList = result.data.rows;
      console.log(this.compoundDataList);
      // this.compoundDataList = compoundDataList;
    });
  }
}
