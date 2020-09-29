import { Component, OnInit, PipeTransform} from '@angular/core';

interface Product {
  name: string;
  price: number;
  description: string;
  rating: number;
}

const PRODUCTS: Product[] = [
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

function search(text: string, pipe: PipeTransform): Product[] {
  return PRODUCTS.filter(country => {
    const term = text.toLowerCase();
    return country.name.toLowerCase().includes(term)
        || pipe.transform(country.price).includes(term)
        || pipe.transform(country.description).includes(term);
  });
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})

export class ProdutosComponent implements OnInit {
  public products: Product[]
  currentRate = 10

  constructor() {
    this.products = PRODUCTS;
  };

  ngOnInit(): void {
  }

}
