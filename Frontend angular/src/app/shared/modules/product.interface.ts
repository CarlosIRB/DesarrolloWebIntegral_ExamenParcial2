export interface Product{
    idProducto: number,
    nombre: string,
    descripcion: string,
    imagen: string,
    precio: number,
    idCategoria: number
  }

export interface Category{
    idCategoria: number,
    nombre: string
}