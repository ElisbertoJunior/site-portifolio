import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-title',
  templateUrl: './secondary-title.component.html',
  styleUrls: ['./secondary-title.component.css']
})
export class SecondaryTitleComponent implements OnInit {

  @Input()
  titleInput: string = ''

  @Input()
  titleInputSpan: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
