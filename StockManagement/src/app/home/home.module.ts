import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { ModelModule } from '../model/mode.module';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],

})
export class HomeModule{}