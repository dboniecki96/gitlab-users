import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Filter} from '../api.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public form: FormGroup;
  @Output() filter: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() {
    this.initForm();
  }

  public ngOnInit(): void {
    this.form.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged()
    ).subscribe((res: Filter) => this.filter.emit({
      page: 1,
      ...res
    }));
  }

  public initForm(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }
}
