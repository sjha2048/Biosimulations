import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccessLevel } from 'src/app/Shared/Enums/access-level';
import { getLicenseInfo } from 'src/app/Shared/Enums/license';
import { ChartType } from 'src/app/Shared/Models/chart-type';
import { ActivatedRoute, Router } from '@angular/router';
import { NavItemDisplayLevel } from 'src/app/Shared/Enums/nav-item-display-level';
import { NavItem } from 'src/app/Shared/Models/nav-item';
import { BreadCrumbsService } from 'src/app/Shared/Services/bread-crumbs.service';
import { ChartTypeService } from 'src/app/Shared/Services/chart-type.service';
import { FormatTimeForHumansPipe } from 'src/app/Shared/Pipes/format-time-for-humans.pipe';
import { OkCancelDialogComponent, OkCancelDialogData } from 'src/app/Shared/Components/ok-cancel-dialog/ok-cancel-dialog.component';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['../../../Shared/Components/cards/cards.component.sass', './view.component.sass'],
})
export class ViewComponent implements OnInit {
  getLicenseInfo = getLicenseInfo;

  id: string;
  chartType: ChartType;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(BreadCrumbsService) private breadCrumbsService: BreadCrumbsService,
    private chartTypeService: ChartTypeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.id = routeParams.id;

      this.getData();

      const crumbs: object[] = [
        {label: 'Chart types', route: '/chart-types'},
        {label: 'Chart type ' + this.id},
      ];
      const buttons: NavItem[] = [
        {
          iconType: 'fas',
          icon: 'pencil-alt',
          label: 'Edit',
          route: ['/chart-types', this.id, 'edit'],
          display: (this.chartType && this.chartType.access === AccessLevel.public ? NavItemDisplayLevel.never : NavItemDisplayLevel.user),
          displayUser: (!!this.chartType ? this.chartType.owner : null),
        },
        {
          iconType: 'fas',
          icon: 'trash-alt',
          label: 'Delete',
          click: () => { this.openDeleteDialog() },
          display: (this.chartType && this.chartType.access === AccessLevel.public ? NavItemDisplayLevel.never : NavItemDisplayLevel.user),
          displayUser: (!!this.chartType ? this.chartType.owner : null),
        },
        {
          iconType: 'fas',
          icon: 'plus',
          label: 'New',
          route: ['/chart-types', 'new'],
          display: NavItemDisplayLevel.always,
        },
        {
          iconType: 'fas',
          icon: 'user',
          label: 'Your chart types',
          route: ['/user', 'chart-types'],
          display: NavItemDisplayLevel.loggedIn,
        },
        {
          iconType: 'fas',
          icon: 'list',
          label: 'Browse',
          route: ['/chart-types'],
          display: NavItemDisplayLevel.always,
        },
      ];
      this.breadCrumbsService.set(crumbs, buttons, ['tabs']);
    });
  }

  getData() {
    this.chartType = this.chartTypeService.get(this.id);
  }

  download(): void {
    const link = document.createElement('a');
    link.download = `chart-type-${ this.id }.json`;
    const blob: Blob = new Blob(
      [JSON.stringify(this.chartType.spec)],
      {type : 'application/json'});
    link.href = URL.createObjectURL(blob);
    link.click();
  }

  openDeleteDialog(): void {
    this.dialog.open(OkCancelDialogComponent, {
      data: {
        title: `Delete chart type ${ this.id }?`,
        action: () => {
          this.chartTypeService.delete(this.id);
          this.router.navigate(['/chart-types']);
        },
      },
    });
  }
}
