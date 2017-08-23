import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  ngOnInit() {
  }

}
