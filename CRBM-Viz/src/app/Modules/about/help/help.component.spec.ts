import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../app-material.module';
import { SharedModule } from '../../../Shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, SharedModule, RouterTestingModule ],
      providers: [ RouterTestingModule ],
      declarations: [ HelpComponent ],      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
