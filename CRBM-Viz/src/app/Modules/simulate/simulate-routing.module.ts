import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulateComponent } from './simulate/simulate.component';
import { FileChooserComponent } from './new-simulation/file-chooser/file-chooser.component';
import { SimulationTaskComponent } from './new-simulation/simulation-task/simulation-task.component';
import { BrowseComponent } from './browse/browse.component';
import { StatusComponent } from './status/status.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', component: BrowseComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'status', component: StatusComponent },
  { path: 'new', component: SimulateComponent, children: [
    { path: '', component: FileChooserComponent },
    { path: 'tasks', component: SimulationTaskComponent}
  ]},
  { path: ':id', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [],
})
export class SimulateRoutingModule {}
