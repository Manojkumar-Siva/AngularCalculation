import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CylinderComponent,} from './vol cylinder/cylinder.component';
import { TriangleComponent } from './triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent ,TriangleComponent ,CylinderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
