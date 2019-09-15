import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgComponent {

  @Input()
  url: string;

  @Output()
  changed = new EventEmitter<string>();

  onChange(): void {
    this.changed.emit();
  }
}
