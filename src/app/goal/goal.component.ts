import { Component, OnInit } from '@angular/core';
import {Goal} from "../goal";
import {GoalService} from "../goal-service/goal.service";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[];

  constructor(goalService:GoalService) {
    this.goals = goalService.getgoals()
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index: string | number){
    // @ts-ignore
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  goalDelete(isComplete: any, index: number) {
    function constructor() {

    }

    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }


  ngOnInit(): void {
  }

}
