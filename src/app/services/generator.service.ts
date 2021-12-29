import { Injectable } from '@angular/core';
import { Boss } from '../models/boss';
import { BossList } from '../models/boss-list';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private static bossList: Boss[];
  constructor() { }

  public generate(): Boss[] {
    GeneratorService.bossList = [...BossList.list];
    let boss = GeneratorService.bossList.find(x => x.id == 1) as Boss;
    let returnValue: Boss[] = [boss];
    this.removeItem(boss);
    let finalBoss = GeneratorService.bossList.find(x => x.id == 13) as Boss;
    this.removeItem(finalBoss);

    while (returnValue.length < BossList.list.length - 1) {
      boss = GeneratorService.bossList[Math.floor(Math.random() * GeneratorService.bossList.length)];

      console.log(boss.name)
      if (this.check(boss)) {
        console.log(boss.name)
        returnValue.push(boss);
        this.removeItem(boss);
      }
    }

    returnValue.push(finalBoss);
    return returnValue;
  }

  private removeItem(boss: Boss) {
    const index = GeneratorService.bossList.indexOf(boss, 0);
    if (index > -1) {
      GeneratorService.bossList.splice(index, 1);
    }
  }

  private check(boss: Boss): boolean {
    let returnValue = true;
    boss.preReq.forEach(x => {
      if (GeneratorService.bossList.find(y => y.id == x)) {
        returnValue = false;
      }
    });

    return returnValue;
  }
}
