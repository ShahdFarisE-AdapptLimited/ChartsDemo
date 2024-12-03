import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, CategoryService, BarSeriesService, TooltipService, ColumnSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule, HttpClientModule
  ],
  providers: [
    CategoryService,
    BarSeriesService,
    TooltipService, 
    ColumnSeriesService,
    LineSeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
