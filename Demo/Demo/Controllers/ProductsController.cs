namespace Demo.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Demo.Models;
    using Demo.Repositories;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [EnableCors("SiteCorsPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository products;

        public ProductsController(IProductRepository productRepository)
        {
            this.products = productRepository;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAllProducts()
        {
            List<Product> products = this.products.GetAllProducts();
            return this.Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(long id)
        {
            Product product = this.products.GetProduct(id);
            if (product == null)
            {
                return this.StatusCode(401);
            }

            return this.Ok(product);
        }

        [HttpPost]
        public IActionResult CreateProduct(Product product)
        {
            Product createdProduct = this.products.CreateProduct(product.Name, product.Category, product.Price);
            return this.Ok(createdProduct);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(Product product)
        {
            try
            {
                this.products.UpdateProduct(product.Id, product.Name, product.Category, product.Price);
                return this.Ok();
            }
            catch (Exception)
            {
                return this.StatusCode(401);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(long id)
        {
            this.products.DeleteProduct(id);
            return this.Ok();
        }
    }
}