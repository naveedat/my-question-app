import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {
    path: 'question',
    component: QuestionComponent,
    data: { title: 'List of Albums' }
  },
  {
    path: '',
    redirectTo: '/question',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
