import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { CardComponent } from '@features/products/card/card.component';
import { Product } from '@shared/modules/product.interface';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  products = this.productSvc.products;
  
}
