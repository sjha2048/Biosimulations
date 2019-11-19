import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSimulationComponent } from './new-simulation/new-simulation.component';
import { SimulateComponent } from './simulate/simulate.component';
import { StatusComponent } from './status/status.component';
import { BrowseComponent } from './browse/browse.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'status', component: StatusComponent },
  { path: 'new', component: SimulateComponent },
  { path: ':id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [],
})
export class SimulateRoutingModule {}
