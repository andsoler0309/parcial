/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantListComponent ],
      providers: [ PlantService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.datatype.number(),
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
        faker.datatype.number(),
        faker.random.word(),
        faker.lorem.sentence(),
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 plants', () => {
    expect(component.plants.length).toBe(3);
  });

  it('should table have 3 rows', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should table have 4 total columns', () => {
    const columns = debug.queryAll(By.css('thead th'));
    expect(columns.length).toBe(4);
  });

  it('should table have total 4 rows', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
