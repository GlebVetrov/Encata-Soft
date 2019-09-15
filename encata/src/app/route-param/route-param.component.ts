import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteParamComponent {

  private id = 4;

  constructor(private router: Router) { }
}
