import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CronometroComponent} from './cronometro.component'
import {RelojFactory} from "./classes/relojFactory";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, CronometroComponent ],
    bootstrap:    [ AppComponent ],
    providers: [RelojFactory]
})
export class AppModule { }
