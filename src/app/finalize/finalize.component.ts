import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {
  private sub: any;
  private order: any = {};
  private json: string;
  private props = [
    {
      name: 'tokenName',
      view: 'Token Name'
    },
    {
      name: 'tokenSymbol',
      view: 'Token Symbol'
    },
    {
      name: 'decimals',
      view: 'Decimals'
    },
    {
      name: 'initialSupply',
      view: 'Initial Supply'
    },
    {
      name: 'initialSupplyHolder',
      view: 'Initial Supply Holder'
    }
  ];

  constructor(private data: DataService,
              private route: ActivatedRoute) { }

  ethProtocol(address: string) {
    return `ethereum:${address||''}`;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);

      this.data.get(`http://localhost:8081/public/get-order/${params.orderId}`)
        .subscribe(resp => {
          this.order = resp.data;
          this.json = JSON.stringify(resp.data, null, '  ');
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
