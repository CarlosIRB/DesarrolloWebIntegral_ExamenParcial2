import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ProductsService } from "@api/products.service";
import { Component, inject } from "@angular/core";
import { Product } from '@shared/modules/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  products = this.productSvc.products;
  categorias = [
    { id: 1, nombre: "Interiores" },
    { id: 2, nombre: "Exteriores" },
    { id: 3, nombre: "Mixtas" },
    { id: 4, nombre: "Arbustos" },
    { id: 5, nombre: "Arboles" },
    { id: 6, nombre: "Florales" },
    { id: 7, nombre: "Deserticas" },
    { id: 8, nombre: "Enredaderas" }
  ];

  buscarProductos(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const texto = inputElement.value;
    this.productSvc.searchProducts(texto);
  }

  filtrarCategorias(idCategoria: number): void {
    this.productSvc.filterByCategory(idCategoria);
  }
}