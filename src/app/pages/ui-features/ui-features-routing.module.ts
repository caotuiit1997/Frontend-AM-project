import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';


const routes: Routes = [{
  path: '',
  component: UiFeaturesComponent,
  children: [{
    path: 'buttons',
    component: ButtonsComponent,
  }, {
    path: 'grid',
    component: GridComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiFeaturesRoutingModule { }
