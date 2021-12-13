import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsComponent} from "./components.component";
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  }
]

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class ComponentsModule { }
