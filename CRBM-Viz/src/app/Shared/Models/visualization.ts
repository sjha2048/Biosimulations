import { AccessLevel } from '../Enums/access-level';
import { License } from '../Enums/license';
import { ChartType } from './chart-type';
import { Identifier } from './identifier';
import { JournalReference } from './journal-reference';
import { Model } from './model';
import { Person } from './person';
import { Project } from './project';
import { RemoteFile } from './remote-file';
import { Simulation } from './simulation';
import { SimulationResult } from './simulation-result';
import { TopLevelResource } from 'src/app/Shared/Models/top-level-resource';
import { User } from './user';
import { VisualizationLayoutElement } from './visualization-layout-element';
import { ChartTypeService } from '../Services/chart-type.service';
import { ModelService } from '../Services/model.service';
import { ProjectService } from '../Services/project.service';
import { SimulationService } from '../Services/simulation.service';
import { UtilsService } from '../Services/utils.service';

export class Visualization implements TopLevelResource {
  id?: string;
  name?: string;
  columns: number;
  layout?: VisualizationLayoutElement[];
  image?: File | RemoteFile;
  description?: string;
  tags?: string[] = [];
  data?: SimulationResult[];
  parent?: Visualization;
  identifiers?: Identifier[] = [];
  refs?: JournalReference[] = [];
  authors?: (User | Person)[] = [];
  owner?: User;
  access?: AccessLevel;
  accessToken?: string = UtilsService.genAccessToken();
  license?: License;
  created?: Date;
  updated?: Date;

  getIcon() {
    return {type: 'fas', icon: 'paint-brush'};
  }

  getRoute() {
    return ['/visualizations', this.id];
  }

  getAuthors(): (User | Person)[] {
    if (this.authors && this.authors.length) {
      return this.authors;
    } else {
      return [this.owner];
    }
  }

   getRows(): number {
    return Math.ceil(this.layout.length / this.columns);
  }

  getSpec(): object {
    if (this.layout.length === 0) {
      return null;

    } else if (this.layout.length === 1) {
      return this.layout[0].chartType.spec;

    } else {

      const spec: object = {
        $schema: this.layout[0].chartType.spec['$schema'],
        vconcat: [],
      }
      const rows = this.getRows();
      for (let iRow = 0; iRow < rows; iRow++) {
        const maxColumns: number = Math.min(
          this.columns,
          this.layout.length - iRow * this.columns);
        const row = [];
        spec['vconcat'].push({hconcat: row});
        for (let iCol = 0; iCol < maxColumns; iCol++) {
          const specCopy: object = {};
          Object.assign(specCopy, this.layout[iRow * this.columns + iCol].chartType.spec);
          for (const prop of ['autosize', 'height', 'width']) {
            if (prop in specCopy) {
              delete specCopy[prop];
            }
          }
          row.push(specCopy);
        }
      }
      return spec;
    }
  }

  getProjects(): Project[] {
    return [
      ProjectService._get('001'),
      ProjectService._get('002'),
      ProjectService._get('003'),
    ];
  }

  getModels(): Model[] {
    return [
      ModelService._get('001'),
      ModelService._get('002'),
      ModelService._get('003'),
    ];
  }

  getSimulations(): Simulation[] {
    return [
      SimulationService._get('001'),
      SimulationService._get('002'),
      SimulationService._get('003'),
    ];
  }

  getChartTypes(): ChartType[] {
    return [
      ChartTypeService._get('001'),
      ChartTypeService._get('002'),
      ChartTypeService._get('003'),
    ];
  }
}
