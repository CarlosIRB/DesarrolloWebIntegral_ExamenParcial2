import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@envs/environment";
import { Category, Product } from "@shared/modules/product.interface";
import { Observable, tap } from "rxjs"

@Injectable({ providedIn: 'root' })
export class ProductsService {
    public products = signal<Product[]>([])
    public readonly _http = inject(HttpClient)
    public readonly _endPoint = environment.apiURL;

    constructor() {
        this.getProducts()
    }

    public getProducts(): void {
        this._http.get<Product[]>(`${this._endPoint}/Producto`)
            .pipe(tap((data: Product[]) => this.products.set(data))).subscribe()
    }

    public getProductById(id: number) {
        return this._http.get<Product>(`${this._endPoint}/Producto/${id}`);
    }

    public searchProducts(texto: string): void {
        this._http.get<Product[]>(`${this._endPoint}/Producto/buscar/${texto}`)
            .pipe(tap((data: Product[]) => this.products.set(data))).subscribe();
    }

    public filterByCategory(idCategoria: number): void {
        this._http.get<Product[]>(`${this._endPoint}/Producto/categoria/${idCategoria}`)
            .pipe(tap((data: Product[]) => this.products.set(data))).subscribe();
    }
}