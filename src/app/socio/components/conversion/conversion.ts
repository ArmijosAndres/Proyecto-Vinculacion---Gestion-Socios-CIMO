import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  imports: [CommonModule, FormsModule],
  templateUrl: './conversion.html',
  styleUrls: ['./conversion.css']
})
export class Conversion {
  amount: number = 0;
  from: string = 'USD';
  to: string = 'EUR';
  result: number | null = null;

  private rates: { [key: string]: number } = {
    'USD_EUR': 0.85,
    'EUR_USD': 1.18,
    'USD_COP': 4200,
    'COP_USD': 0.000238
  };

  convertCurrency(): void {
    const key = `${this.from}_${this.to}`;
    const rate = this.rates[key];

    if (!rate) {
      alert(`Conversión no soportada: ${this.from} a ${this.to}`);
      this.result = null;
      return;
    }

    this.result = this.amount * rate;
  }
}
