import {NgModule} from '@angular/core';
import {ParentComponent} from './parent.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from '../material-module';
import {FormsModule} from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    ParentComponent,
    InputComponent,
    CounterComponent,
    ImgComponent
  ],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports: [
    ParentComponent
  ]
})
export class ParentModule {}
