// #region Ćw 3
// import { Component, Input, OnInit } from '@angular/core';

import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

// @Component({
//   selector: 'app-studenci-view',
//   templateUrl: './studenci-view.component.html',
//   styleUrls: ['./studenci-view.component.css'],
// })
// export class StudenciViewComponent implements OnInit {
//   @Input() studenciItems: string[] = [];
//   constructor() {}

//   ngOnInit(): void {}
// }
//#endregion

// #region Ćw 4
@Component({
  selector: 'app-studenci-view',
  templateUrl: './studenci-view.component.html',
  styleUrls: ['./studenci-view.component.css'],
})
export class StudenciViewComponent implements OnInit {
  @Input() studenciItems: string[] = [];
  @Output() usunStudent: EventEmitter<number> = new EventEmitter<number>();
  @Output() addStudent: EventEmitter<string> = new EventEmitter<string>();
  student: string;
  ngOnInit() {
  }
  usunStudenta(index: number) {
    this.usunStudent.emit(index);
  }
  dodajStudenta() {
    this.addStudent.emit(this.student);
    this.student = '';
  }
}

// #endregion
