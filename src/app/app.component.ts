import { Component } from '@angular/core';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //#region  Ćw 1
  // inputText = 'Moj input';
  // zmienKolor = 'color-black';
  // isDisabled = true;
  // buttonText = "Wyświetl dane Inputa"
  // zmienUstawienia() {
  // this.isDisabled = false;
  // }
  // onFocus() {
  // this.zmienKolor = 'color-brown';
  // }
  // onClick(event) {
  // console.log(event);
  // }
  // onMouseMove(event) {
  // console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
  // }
  // onPaste() {
  // this.inputText = 'Wklejanie zabronione!';
  // }
  // wyswietlDane(data){
  // 	this.buttonText = data;
  // }
  //#endregion

  //#region Ćw 2
  // imie=""
  // nazwisko="Kowalski"
  // wiek:number;
  // wyswietl=false;
  // pokazDane = () => this.wyswietl=true;
  //#endregion

  //#region Ćw 3
  // studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech', 'Ziemowit'];
  // samochody = [
  //   new Samochod('Audi', 'ABDAS', 1999),
  //   new Samochod('Volvo', '#DFS35', 2012),
  //   new Samochod('Codac', '3fsdD34', 2020),
  // ];
  // tytul = 'Moje samochody';
  //#endregion

  //#region Ćw 4
  studenci: string[];
  samochody: Samochod[];
  isCreatedStudent = false;
  isCreatedCar = false;
  ngOnInit(): void {
    this.studenci = [
      'Karol',
      'Basia',
      'Adam',
      'Teresa',
      'Wojciech',
      'Ziemowit',
    ];
    this.samochody = [
      new Samochod('Audi', 'ABDAS', 1999),
      new Samochod('Volvo', '#DFS35', 2012),
      new Samochod('Codac', '3fsdD34', 2020),
    ];
  }
  onAddStudent(student: string) {
    if (this.studenci.includes(student)) {
      this.isCreatedStudent = true;
    } else {
      this.isCreatedStudent = false;
      this.studenci.push(student);
    }
  }
  onUsunStudent(index: number) {
    this.isCreatedStudent = false;
    this.studenci.splice(index, 1);
  }

  onAddCar(car: Samochod) {
    if (
      this.samochody.find(
        (_car) =>
          _car.marka === car.marka &&
          _car.model === car.model &&
          _car.rok === car.rok
      )
    ) {
      this.isCreatedCar = true;
    } else {
      this.isCreatedCar = false;
      this.samochody.push(car);
    }
  }
  onUsunCar(index: number) {
    this.isCreatedStudent = false;
    this.samochody.splice(index, 1);
  }

  // #endregion
}
