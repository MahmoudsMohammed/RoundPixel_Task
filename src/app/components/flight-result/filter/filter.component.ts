import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() sidebarVisible: boolean = true;
  @Input() airLines: string[] = [];
  filtersForm!: FormGroup;

  ngOnInit(): void {
    this.filtersForm = new FormGroup({
      airLines: new FormArray([], Validators.required),
      rangeValues: new FormControl([200, 800], Validators.required),
    });

    this.filtersForm.valueChanges.subscribe(console.log);
  }

  onChange(e: Event) {
    const airLines = this.filtersForm.get('airLines') as FormArray,
      input = e.target as HTMLInputElement;
    if (input.checked) {
      airLines.push(new FormControl((e.target as HTMLInputElement).value));
    } else {
      const index = airLines.controls.findIndex((x) => x.value === input.value);
      airLines.removeAt(index);
    }
  }
}
