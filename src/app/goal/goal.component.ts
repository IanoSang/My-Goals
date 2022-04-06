import { Component, OnInit } from '@angular/core';
import {Goal} from "../goal";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] =[
    new Goal (1, 'Watch Champions League Football', 'Find time to watch today and tomorrow football matches', new Date(2022, 3, 5)),
    new Goal (2,  'Buy Cookies',  'I have to buy cookies for the parrot', new Date(2022, 3, 6)),
    new Goal(3, 'Get a new phone charger', 'I lost my phone charger, i have to find a replacement', new Date(2022, 3, 4)),
    new Goal(4, 'Get chicken Food', 'Chickens likes expensive sacks', new Date(2022, 3, 3)),
    new Goal(5, 'Solve Project Bugs',  'Solve bugs in my angular projects my friends projects', new Date(2022, 3, 8)),
    new Goal(6, 'Plot my Core Course Plan',  'I have to come up with a plan on how i will be approaching my studies for the next four months', new Date(2022, 3, 10)),
  ];
  toggleDetails(index: string | number){
    // @ts-ignore
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
