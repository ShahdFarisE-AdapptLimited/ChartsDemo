import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chartData: Object[] = [];

  public xAxis: Object = {
    valueType: 'Category',
    title: 'Month'
  };

  public yAxis: Object = {
    title: 'Sales'
  };

  public chartTitle: string = 'Monthly Sales';
  public tooltipSettings: Object = {
    enable: true
  };

  public legend: Object = {
    visible: true
  };

  // Inject HttpClient into the component's constructor
  constructor(private http: HttpClient) {}

  // Fetch data from the API when the component is initialized
  ngOnInit(): void {
    this.fetchChartData();
  }

  // Function to make an API call and update chart data
  private fetchChartData(): void {
    this.http.get<Object[]>('http://localhost:61516/api/chartdata')
      .subscribe(
        data => {
          console.log('API Data:', data); // Log the data from the API
          this.chartData = data; // Update the chartData with the response
        },
        error => {
          console.error('Error fetching data:', error); // Handle the error
        }
      );
  }
  
}
