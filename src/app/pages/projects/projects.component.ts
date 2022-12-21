import { Component, OnInit } from '@angular/core';
import my_projects from 'src/assets/data/my_projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: any

  constructor() { }

  ngOnInit(): void {
    if (my_projects) {
      this.projectsList = my_projects.projects
    }

  }

}
