namespace Demo.Repositories
{
    using System.Collections.Generic;
    using System.Linq;
    using Demo.Models;
    using Microsoft.EntityFrameworkCore;

    public class ProductRepository : IProductRepository
    {
        private readonly ProductContext context;

        public ProductRepository(ProductContext context)
        {
            this.context = context;
        }

        public Product CreateProduct(string name, string category, decimal price)
        {
            Product product = new Product
            {
                Name = name,
                Category = category,
                Price = price
            };

            this.context.Products.Add(product);
            this.context.SaveChanges();
            return product;
        }

        public void DeleteProduct(long id)
        {
            Product product = this.GetProduct(id);
            if (product != null)
            {
                this.context.Products.Remove(product);
                this.context.SaveChanges();
            }
        }

        public List<Product> GetAllProducts()
        {
            return this.context.Products.ToList();
        }

        public Product GetProduct(long id)
        {
            return this.context.Products.FirstOrDefault(p => p.Id == id);
        }

        public void UpdateProduct(long id, string name, string category, decimal price)
        {
            Product product = this.GetProduct(id);
            product.Name = name;
            product.Category = category;
            product.Price = price;

            this.context.SaveChanges();
        }
    }
}
