import { Component } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sum: number;
  number1: number;
  number2: number;
  selOperation: string;
  pesan: string;


  Calculate(){
    if (!this.number1 || !this.number2){
      this.pesan ="Angka tidak boleh kosong";
      return
    }

    if(!this.selOperation){
      this.pesan ="Operasi belum dipilih";
      return
    }

    if (this.selOperation == "+"){
      this.sum=this.number1 + this.number2;
    }

    if (this.selOperation == "-"){
      this.sum=this.number1 - this.number2;
    }

    if (this.selOperation == "/"){
      this.sum=this.number1 / this.number2;
    }

    if (this.selOperation == "x"){
      this.sum=this.number1 * this.number2;
    }

    this.pesan="Hasilnya adalah " + this.sum;
  }
}
