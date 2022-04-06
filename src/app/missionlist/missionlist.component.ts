import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SpaceXData from '../data';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  dataArray: Array<SpaceXData> = [];

  constructor(private service: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.getData()

  }

  getData() {
    this.service.getSpaceXData().subscribe((data) => {
      if (Array.isArray(data)) {
        this.dataArray = data
      }
    });
  }

  details(flight: SpaceXData): void{
    this.router.navigate(['missiondetails'], {state: {data: flight}})


  }




}
