import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  listCustomers:any; //listCustomers
  constructor(private httpClient:HttpClient) {}

  ngOnInit(){
    this.httpClient.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
      .subscribe(data => {
        this.listCustomers = data;
      }, error => {
        console.log(error);
      })
  }
  onGetCustomers(c){
    this.httpClient.get("http://localhost:8081/customers"+c.id)
      .subscribe(data => {
        this.listCustomers = data;
      }, error => {
        console.log(error);
      })
  }

}
