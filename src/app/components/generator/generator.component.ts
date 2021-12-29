import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';
import { Boss } from '../../models/boss';

@Component({
  selector: 'boss-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  public bossList: Boss[] = [];

  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {

  }

  public onGenerateHandler() {
    this.bossList = this.generatorService.generate();
  }
}
