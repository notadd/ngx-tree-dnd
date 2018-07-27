import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxTreeDnDModule } from '../../projects/notadd/ngx-tree-dnd/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NgxTreeDnDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
