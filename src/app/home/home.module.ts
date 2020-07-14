import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../service/post-service.service';
const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        CarouselModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule
    ],
    declarations:[
        HomeComponent,
    ],
    providers: [PostService]
})
export class HomeModule {
   
}