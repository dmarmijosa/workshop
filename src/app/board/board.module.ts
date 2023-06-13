import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './componentes/list/list.component';
import { TaskComponent } from './componentes/task/task.component';


@NgModule({
  declarations: [
    BoardComponent,
    ListComponent,
    TaskComponent
    ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
