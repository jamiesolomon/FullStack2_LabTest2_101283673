import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SpaceXData from '../data';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  data?: SpaceXData = undefined;

  

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras?.state?.['data']

    
   }

  ngOnInit(): void {

  }

  
  

}
