import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer:Customer = new Customer(0,"","","","","",);
  constructor(private customerservice:CustomerService ,private router:Router) { }

  ngOnInit(): void {
    CustomerId :new FormControl ('158',[Validators.required, Validators.pattern('^[0-9]+$')]);
    ContactNumber : new  FormControl('9878675678',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}')]);

  
  }

  saveCustomer(){
    this.customerservice.createCustomer(this.customer).subscribe(data=>
      {
        console.log(data);
        this.goToCustomerList();
      },
      error=>console.log(error))
  }

  goToCustomerList(){
    this.router.navigate(["/customers"]); //path of the rout that we want to navigate

  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();

  }

}
