package ennea.demo.service;
import ennea.demo.model.Product;
import ennea.demo.repository.Productrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class ProductService {

    @Autowired
    private Productrepo repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getProductById(int prodid) {
        return repo.findById(prodid).get();
    }

    public Product addProduct(Product product) {
        return repo.save(product);
    }

    public void updateProduct(Product prod) {
        repo.save(prod);
    }

    public void deleteProduct(int prodid) {
        repo.deleteById(prodid);
    }
}