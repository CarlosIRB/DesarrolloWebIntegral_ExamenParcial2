using Microsoft.EntityFrameworkCore;
using TiendaCarlosExamenAPI.Models;

namespace TiendaCarlosExamenAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Obtener la cadena de conexión
            var connectionString = builder.Configuration.GetConnectionString("cadenaSQL");
            // Agregar la configuracion para sql server
            builder.Services.AddDbContext<BdTiendaCarlosContext>(options => options.UseSqlServer(connectionString));

            // Definimos la nueva política CORS para permitir solicitudes desde localhost:4200
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("NuevaPolitica", app =>
                {
                    app.WithOrigins("http://localhost:4200")
                       .AllowAnyHeader()
                       .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("NuevaPolitica");  // Aplica la política de CORS aquí

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
