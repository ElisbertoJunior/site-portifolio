import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent implements OnInit {

 @Input()
 cardImg:  string=''

 @Input()
 CardTitle: string = ''

 @Input()
 cardDescription: string = ''

 @Input()
 testLink: string = ''

 @Input()
 repositoryLink: string = ''

  constructor() { }


  ngOnInit() {


  }



}
