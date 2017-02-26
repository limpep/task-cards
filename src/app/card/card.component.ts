import {Component, OnInit, Input} from '@angular/core';

import { Task} from '../model/task'

@Component({
  moduleId: module.id,
  selector: 'tc-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: Task;

  constructor() {
  }

  ngOnInit() {
  }

}
