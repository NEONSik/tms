import {Sort} from './sort';
import {Pageable} from './pageable';

export class Page<T> {
  sort: Sort;
  pageable: Pageable;
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  numberOfElements: number;
  last: boolean;
  first: boolean;
  empty: boolean;
}
