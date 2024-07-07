using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Threading.Tasks;
using TiendaCarlosExamenAPI.Models;

namespace TiendaCarlosExamenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly BdTiendaCarlosContext _context;

        public ProductoController(BdTiendaCarlosContext context)
        {
            _context = context;
        }

        // GET: api/Producto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {
            return await _context.Productos.ToListAsync();
        }

        // GET: api/Producto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Producto>> GetProducto(int id)
        {
            var producto = await _context.Productos.FindAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            return producto;
        }

        // GET: api/Producto/search/{text}
        [HttpGet("buscar/{text}")]
        public async Task<ActionResult<IEnumerable<Producto>>> SearchProductos(string text)
        {
            return await _context.Productos
                .Where(p => p.Nombre.Contains(text) || p.Descripcion.Contains(text))
                .ToListAsync();
        }

        // GET: api/Producto/category/5
        [HttpGet("categoria/{idCategoria}")]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductosByCategoria(int idCategoria)
        {
            return await _context.Productos
                .Where(p => p.IdCategoria == idCategoria)
                .ToListAsync();
        }
    }
}
