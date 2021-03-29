import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { RegisterComponent } from './partials/register/register.component';
import { ListComponent } from './partials/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule
  ]
})
export class PersonModule { }
