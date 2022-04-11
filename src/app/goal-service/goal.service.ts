import { Injectable } from '@angular/core';
import {Goal} from "../goal";
import {goals} from "../goalList";

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goalService(): Goal {
    // @ts-ignore
    return Goal;
  }



  constructor() { }


  getgoals() {
return goals
  }
}
