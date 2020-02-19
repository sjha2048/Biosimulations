import { AccessLevel } from '../Enums/access-level';
import { License } from '../Enums/license';
import { ChartType } from './chart-type';
import { Format } from './format';
import { Identifier } from './identifier';
import { JournalReference } from './journal-reference';
import { ModelParameter } from './model-parameter';
import { OntologyTerm } from './ontology-term';
import { Person } from './person';
import { Project } from './project';
import { RemoteFile } from './remote-file';
import { Simulation } from './simulation';
import { Taxon } from './taxon';
import { TopLevelResource } from 'src/app/Shared/Models/top-level-resource';
import { User } from './user';
import { Visualization } from './visualization';
import { ProjectService } from '../Services/Resources/project.service';
import { SimulationService } from '../Services/Resources/simulation.service';
import { UtilsService } from '../Services/utils.service';
import { ChartTypeService } from '../Services/Resources/chart-type.service';
import { VisualizationService } from '../Services/Resources/visualization.service';
import { UserService } from '../Services/user.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export class Model extends TopLevelResource {
  taxon?: Taxon;
  parameters: ModelParameter[] = [];
  file?: File | RemoteFile;
  image?: File | RemoteFile;
  framework?: OntologyTerm; // SBO modeling framework
  format?: Format;

  public simulationService: SimulationService;
  public visualizationService: VisualizationService;
  public projectService: ProjectService;
  public chartTypeService: ChartTypeService;
  public userservice: UserService;
  getOwner(): Observable<User> {
    if (this.userservice) {
      if (this.owner) {
        return of(this.owner);
      } else {
        const user = this.userservice.get$(this.OWNER);
        user.pipe(tap(owner => (this.owner = owner)));
        return user;
      }
    } else {
      throw new Error('No user service');
    }
  }
  getIcon() {
    return { type: 'fas', icon: 'project-diagram' };
  }

  getRoute(): (string | number)[] {
    return ['/models', this.id];
  }

  getBioModelsId(): string {
    for (const id of this.identifiers) {
      if (id.namespace === 'biomodels.db') {
        return id.id;
      }
    }
    return null;
  }

  getAuthors(): (User | Person)[] {
    if (this.authors && this.authors.length) {
      const people: Person[] = [];
      this.authors.forEach((person: Person) => {
        people.push(person);
      });
      return people;
    } else {
      return [new Person(this.OWNER)];
    }
  }

  getProjects(): Observable<Project[]> {
    return this.projectService.list();
  }

  getSimulations(): Observable<Simulation[]> {
    return this.simulationService.list();
  }

  getChartTypes(): Observable<ChartType[]> {
    return this.chartTypeService.list();
  }

  getVisualizations(): Observable<Visualization[]> {
    return this.visualizationService.list();
  }
}
