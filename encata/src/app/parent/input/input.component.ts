import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Input()
  name: string;

  @Output()
  nameChange = new EventEmitter<string>();

  onNameChange(model: string): void {
    this.name = model;
    this.nameChange.emit(model);
  }
}
