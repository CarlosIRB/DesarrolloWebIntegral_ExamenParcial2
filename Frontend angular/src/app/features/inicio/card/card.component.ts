import { Component, input } from '@angular/core';
import { Product } from '@shared/modules/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>()

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

  // Método para obtener el nombre de la categoría por su ID
  obtenerNombreCategoria(id: number): string {
    const categoria = this.categorias.find(cat => cat.id === id);
    return categoria ? categoria.nombre : 'Desconocida';
  }
}


