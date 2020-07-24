import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  checkoutForm: FormGroup;
  constructor(private FormBuilder :FormBuilder) { 
    /*this.checkoutForm=FormBuilder.group({
      emailAddr: new FormControl(),
      quantity: new FormControl(),
      terms: new FormControl
    });
   */
   this.checkoutForm=FormBuilder.group({
    emailAddr:['',[Validators.required, Validators.email]], 
    quantity: ['',Validators.required],
    terms: ['', Validators.requiredTrue]
   });
  }

  ngOnInit(): void {
  }
  
  postData()
  {
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
  }
  

}
