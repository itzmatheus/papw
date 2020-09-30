import { Component, OnInit, PipeTransform} from '@angular/core';

export interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
}

var PRODUCTS: Product[] = [
  {
    name: 'Xbox One',
    price: 2100.00,
    description: 'Videogame para todos os públicos',
    rating: 10,
  },
  {
    name: 'PS4 Sony',
    price: 2000.00,
    description: 'Videogame para crianças',
    rating: 8,
  },
  {
    name: 'PS Vita',
    price: 100.00,
    description: 'Videogame para bebês',
    rating: 2,
  },
  {
    name: 'Dell 7580 15 POL',
    price: 3999.99,
    description: 'Notebook para estudante',
    rating: 10,
  }
]

export function addProduct(product: Product): void {
  PRODUCTS.push(product);
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})

export class ProdutosComponent implements OnInit {
  public products: Product[]

  constructor() {
    this.products = PRODUCTS;
  };

  deleteProduct(product: Product): void {
    let products = this.products;
    this.products = products.filter((p) => p !== product)
  }

  ngOnInit(): void {
  }

}
