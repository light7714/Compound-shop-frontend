import { Injectable } from '@angular/core';

import { CompoundData } from './compound-data';

@Injectable({
  providedIn: 'root'
})
export class CompoundService {
  url = 'http://localhost:8080/compounds';

  async getAllCompounds(): Promise<any> {
    const allCompoundsUrl = `${this.url}/all`;
    const data = await fetch(allCompoundsUrl);
    // console.log(await data.json());
    return (await data.json()) ?? [];
  }

  async getCompoundById(id: number): Promise<any | undefined> {
    const CompoundByIdURL = `${this.url}/${id}`;
    const data = await fetch(CompoundByIdURL);
    return (data.json()) ?? {};
  }

  constructor() { }
}
