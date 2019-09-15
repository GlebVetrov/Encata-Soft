import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {

  name = 'Gleb';
  number = 0;
  picture = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  changeNumber(inc: boolean): void {
   inc ? this.number += 1 :  this.number -= 1;
  }

  changePicture(): void {
    this.picture = 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  }
}
