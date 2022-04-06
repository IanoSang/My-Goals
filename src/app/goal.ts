export class Goal {
  showDescription: boolean;

  constructor(public id: number, public name: string, public descriptions: string, public completeDate: Date){
    this.showDescription=false;
  }
}
