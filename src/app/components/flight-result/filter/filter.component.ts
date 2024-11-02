import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() sidebarVisible: boolean = true;
  @Input() airLines: string[] = [];
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
  filtersForm!: FormGroup;

  ngOnInit(): void {
    this.filtersForm = new FormGroup({
      airport: new FormControl('', [Validators.pattern('^[A-Za-z]+$')]),
      airLines: new FormArray([]),
      rangeValues: new FormControl([200, 800]),
    });
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

  onToggle() {
    this.sidebarVisible = false;
    this.toggle.next(false);
  }

  onSubmit() {
    console.log(this.filtersForm.value);
    this.onToggle();
  }
}
