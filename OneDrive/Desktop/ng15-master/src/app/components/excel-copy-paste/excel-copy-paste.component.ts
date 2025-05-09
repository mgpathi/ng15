import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-excel-copy-paste',
  templateUrl: './excel-copy-paste.component.html',
  styleUrls: ['./excel-copy-paste.component.scss']
})
export class ExcelCopyPasteComponent {
  myForm: FormGroup = this.fb.group({});
  clipboardData!: string;

  // constructor(private fb: FormBuilder) {
  //   this.myForm = this.fb.group({
  //     rows: this.fb.array([]),
  //   });
  // }

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      columnTypes: this.fb.array([]),
      rows: this.fb.array([]),
    });

    // Initialize columnTypes with default values
    for (let i = 0; i < 3; i++) {
      this.columnTypes.push(this.fb.group({
        type: ['text']
      }));
    }
  }

  get rowsControls() {         
    return (<FormArray>this.myForm.get('rows')).controls;     
  }

  get columnControls() {         
    return (<FormArray>this.myForm.get('columnTypes')).controls;     
  }

  saveData() {
    // Implement your save logic here using this.myForm.value
    console.log('Form data:', this.myForm.value);
  }

  processData(event:ClipboardEvent) {

    let clipboardData = event.clipboardData?.getData('text') || '';
    const rows = clipboardData.split('\n').map(row => row.split('\t'));
    console.log("Data rows are==>",rows, clipboardData);
    const formRows = this.myForm.get('rows') as FormArray;
    formRows.clear();

    rows.forEach((row,ind) => {
      const formRow = this.fb.group({});
      row.forEach((value, index) => {
        formRow.addControl(`col${ind}${index}`, this.fb.control(value));
      });
      formRows.push(formRow);
    });
    console.log("myForm==>",this.myForm, formRows);
  }

  

 

  get columnTypes(): FormArray {
    return this.myForm.get('columnTypes') as FormArray;
  }

  // getColumnType(row: number, controlName: string): string {
  //   const typeControl = this.myForm.get('columnTypes').get(`${row}.type`);
  //   return typeControl ? typeControl.value : 'text';
  // }

  // disableControls(row: number): void {
  //     const formRow = this.myForm.get('rows').get(`${row}`);
  //     if (formRow) {
  //       Object.keys(formRow.controls).forEach((controlName) => {
  //         const control = formRow.get(controlName);
  //         if (control) {
  //           control.disable();
  //         }
  //       });
  //     }
  // }

  // enableControls(row: number): void {
  //   const formRow = this.myForm.get('rows').get(`${row}`);
  //   if (formRow) {
  //     Object.keys(formRow.controls).forEach((controlName) => {
  //       const control = formRow.get(controlName);
  //       if (control) {
  //         control.enable();
  //       }
  //     });
  //   }
  // }

  removeRow(rowIndex: number): void {
    //this.enableControls(rowIndex);
    const formRows = this.myForm.get('rows') as FormArray;
    formRows.removeAt(rowIndex);
    this.disableUnusedControls();
  }

  disableUnusedControls(): void {
    const lastRowIndex = (this.myForm.get('rows') as FormArray).length - 1;
    for (let i = 0; i < lastRowIndex; i++) {
      //this.disableControls(i);
    }
  }

  removeColumn(columnIndex: number): void {
    const columnTypes = this.myForm.get('columnTypes') as FormArray;
    columnTypes.removeAt(columnIndex);

    const rows = this.myForm.get('rows') as FormArray;
    rows.controls.forEach((row) => {
      const rowCtrl = row as FormGroup;
      rowCtrl.removeControl(`col${columnIndex}`);
    });
  }

}