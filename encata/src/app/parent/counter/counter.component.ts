import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  @Input()
  number: number;

  @Output()
  changed = new EventEmitter<boolean>();

  onChange(inc: boolean): void {
    this.changed.emit(inc);
  }
}
