import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EditCompoundComponent } from './edit-compound/edit-compound.component';
import { Page404Component } from './page404/page404.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Compound details',
  },
  {
    path: 'edit',
    component: EditCompoundComponent,
    title: 'Edit Compound',
  },
  {
    path: '**',
    component: Page404Component,
    title: 'URL does not exist',
  },
];

export default routeConfig;
