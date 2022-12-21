
import { Component, OnInit } from '@angular/core';
import my_projects from 'src/assets/data/my_projects.json'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  projs: any

  constructor() { }


  ngOnInit() {
    if (my_projects.projects) {
      this.projs = my_projects.projects
    }

  }



}
