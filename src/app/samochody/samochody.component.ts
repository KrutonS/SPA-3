import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.css'],
})
export class SamochodyComponent implements OnInit {
  // #region ćw 3
  // @Input() samochody: Samochod[]=[];
  // constructor() { }

  // ngOnInit(): void {
  // }
  // #endregion

  //#region Ćw 4
  @Input() samochody: Samochod[] = [];
  @Output() delCar: EventEmitter<number> = new EventEmitter<number>();
  @Output() addCar: EventEmitter<Samochod> = new EventEmitter<Samochod>();
  // samochod: Samochod;
	marka:string;
	model:string;
	rok?:number;
	
  requiredMarkaError = false;
  requiredModelError = false;
  ngOnInit() {
		
		console.log(this.samochody[0].marka);
	}
  usunCar(index: number) {
    this.delCar.emit(index);
  }
  dodajCar() {
    if (this.marka && this.model) {
      this.addCar.emit(new Samochod(this.marka, this.model, this.rok));
    } else {
      this.requiredMarkaError = !this.marka;
      this.requiredModelError = !this.model;
    }
  }
  //#endregion
}
