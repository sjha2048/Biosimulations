import { Component, OnInit, Inject } from '@angular/core';
import { Simulation } from 'src/app/Shared/Models/simulation';
import { ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from 'src/app/Shared/Services/bread-crumbs.service';
import { SimulationService } from 'src/app/Shared/Services/simulation.service';
import { FormatTimeForHumansPipe } from 'src/app/Shared/Pipes/format-time-for-humans.pipe';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass'],
})
export class ViewComponent implements OnInit {
  id: string;
  simulation: Simulation;

  constructor(    
    private route: ActivatedRoute,
    @Inject(BreadCrumbsService) private breadCrumbsService: BreadCrumbsService,
    private simulationService: SimulationService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.id = routeParams.id;
      if (this.id) {
        this.getData();
      }
    });

    const crumbs: object[] = [
      {label: 'Simulate', route: '/simulate'},
      {label: 'Simulation ' + this.id},
    ];
    const buttons: object[] = [
      {iconType: 'mat', icon: 'view_list', label: 'Browse', route: ['/simulate']},
      {iconType: 'mat', icon: 'add', label: 'Submit', route: ['/simulate/new']},
      {iconType: 'mat', icon: 'hourglass_empty', label: 'Status', route: ['/simulate/status']},
    ];
    this.breadCrumbsService.set(crumbs, buttons, ['tabs']);
  }

  getData() {
    this.simulation = this.simulationService.get(this.id);
  }
}
