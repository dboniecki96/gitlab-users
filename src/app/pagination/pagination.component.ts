import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {PaginationConfig} from '../api.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  paginationConfig: PaginationConfig;

  @Input() set headers(headers: HttpHeaders) {
    this.paginationConfig = {
      ...this.paginationConfig,
      page: +headers.get('x-page'),
      prevPage: +headers.get('x-prev-page'),
      nextPage: +headers.get('x-next-page')
    };
  }

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  public onPageChange(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }
}
