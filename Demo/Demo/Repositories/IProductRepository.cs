namespace Demo.Repositories
{
    using System.Collections.Generic;
    using Demo.Models;

    public interface IProductRepository
    {
        List<Product> GetAllProducts();

        Product GetProduct(long id);

        Product CreateProduct(string name, string category, decimal price);

        void UpdateProduct(long id, string name, string category, decimal price);

        void DeleteProduct(long id);

    }
}
