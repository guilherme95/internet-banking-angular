import { Component, OnInit } from '@angular/core';
import { parse } from 'path';


// var inputValue = parseFloat(document.getElementById("value").innerHTML);

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  
  constructor() { }

  balance = 0;
  
  deposit(){
    var valueInput = parseFloat((<HTMLInputElement>document.getElementById("valueCash")).value);
    
    if(!valueInput || valueInput<=0){
        alert("Digite um valor maior que zero");
    }else{
      this.balance += valueInput;
    }

  }

  withdraw(){
    var valueInput = parseFloat((<HTMLInputElement>document.getElementById("valueCash")).value);
    
    if(valueInput>this.balance){
      alert("Saldo insuficiente");
    }else if(!valueInput || valueInput<=0){
      alert("Digite um valor maior que zero");
    }else{
      this.balance -= valueInput;
    }
    
    
  }

  ngOnInit(): void {
  }

}
