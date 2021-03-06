import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HorizontalFormComponent} from "./horizontal-form.component";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: HorizontalFormComponent,
  }
]

@NgModule({
  declarations: [HorizontalFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class HorizontalFormModule { }
