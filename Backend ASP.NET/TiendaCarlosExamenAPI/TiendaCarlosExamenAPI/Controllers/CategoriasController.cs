using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;
using TiendaCarlosExamenAPI.Models;
using System.Collections;

namespace TiendaCarlosExamenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private readonly BdTiendaCarlosContext _context;

        public CategoriaController(BdTiendaCarlosContext context)
        {
            _context = context;
        }

        // GET: api/Categoria
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categoria>>> GetCategorias()
        {
            return await _context.Categorias.ToListAsync();
        }

        // GET: api/Categoria/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Categoria>> GetCategoria(int id)
        {
            var categoria = await _context.Categorias.FindAsync(id);

            if (categoria == null)
            {
                return NotFound();
            }

            return categoria;
        }

        // GET: api/Categoria/search/{text}
        [HttpGet("buscar/{text}")]
        public async Task<ActionResult<IEnumerable<Categoria>>> SearchCategorias(string text)
        {
            return await _context.Categorias
                .Where(c => c.Nombre.Contains(text))
                .ToListAsync();
        }
    }
}