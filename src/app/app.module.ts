import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { ChildComponent } from './child/child.component';
import { MydataComponent } from './mydata/mydata.component';
import { StructrualComponent } from './structrual/structrual.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStrPipe,
    ChildComponent,
    MydataComponent,
    StructrualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
