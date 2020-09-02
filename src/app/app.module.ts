import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BoxcomponentComponent } from './boxcomponent/boxcomponent.component';
import { BoxService } from './box.service';


@NgModule({
  declarations: [
    AppComponent,
    BoxcomponentComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [BoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
