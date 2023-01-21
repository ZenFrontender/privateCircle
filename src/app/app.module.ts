import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    NavbarComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    Ng2SearchPipeModule,
    FormsModule,


  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
