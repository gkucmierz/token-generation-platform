import { Component, OnInit } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  public tokenName: String;
  public tokenSymbol: String;
  public decimals: Number;
  public initialSupply: Number;
  public initialSupplyHolder: String;

  public initialSupplyHolderDisabled: Boolean = false;

  public loading: Boolean = false;

  constructor(private data: DataService,
              private router: Router) { }

  onChange(newValue) {
    this.initialSupplyHolderDisabled = this.initialSupply === 0;
  }

  reset() {
    this.tokenName = null;
    this.tokenSymbol = null;
    this.decimals = null;
    this.initialSupply = null;
    this.initialSupplyHolder = null;
  }

  generateToken() {
    this.loading = true;
    let data = {
      tokenName: this.tokenName,
      tokenSymbol: this.tokenSymbol,
      decimals: this.decimals,
      initialSupply: this.initialSupply,
      initialSupplyHolder: this.initialSupplyHolder
    };
    this.data.post('http://localhost:8081/public/create', data)
      .subscribe(resp => {
        console.log(resp);
        if (resp.success) {
          console.log(resp.data);
          this.router.navigate(['/finalize/' + resp.data.order_id]);
          // this.router.navigate(['/finalize'], resp.data.order_id); 
        } else {
          alert('failed: ' + resp.error_msg);
          this.loading = false;
        }
      });
  }

  ngOnInit() {
  }

}
