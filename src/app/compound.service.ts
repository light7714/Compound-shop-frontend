import { Injectable, inject } from '@angular/core';

import { CompoundData } from './compound-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
// if possible, use inbuilt http method
export class CompoundService {
  url = 'http://localhost:8080/compounds';
  router: Router = inject(Router);

  async getAllCompounds(): Promise<any> {
    const fetchURL = `${this.url}/all`;
    const data = await fetch(fetchURL);
    // console.log(await data.json());
    return (await data.json()) ?? [];
  }

  async getCompoundById(id: number): Promise<any | undefined> {
    const fetchURL = `${this.url}/find/${id}`;
    const data = await fetch(fetchURL);
    return data.json() ?? {};
  }

  async submitEditForm(
    Id: number,
    compoundName: string,
    compoundDescription: string,
    imageSource: string,
    ImageAttribution: string
  ) {
    const compoundData: CompoundData = {
      ID: Id,
      CompoundName: compoundName,
      CompoundDescription: compoundDescription,
      ImageSource: imageSource,
      ImageAttribution: ImageAttribution,
      DateModified: '',
    };

    const fetchURL = `${this.url}/edit`;
    const response = await fetch(fetchURL, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(compoundData),
    });

    // console.log(await response.json() ?? 'Error in submitting edit form');

    const respData = (await response.json()) ?? 'Error in submitting edit form';
    console.log(respData);

    this.router.navigate(['/']);
  }

  constructor() {}
}
