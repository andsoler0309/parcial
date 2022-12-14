import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  countInnerPlants: number = 0;
  countOuterPlants: number = 0;

  constructor(private plantService: PlantService) { }

  getPlants(): void {
    this.plantService.getPlants().subscribe(plants => this.plants = plants);
  }

  countPlants(type: string): number {
    return this.plants.filter(p => p.tipo === type).length;
  }

  ngOnInit() {
    this.getPlants();
  }
}
