package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.Productrepo;
@Service
public class ProductService {
    @Autowired
    private Productrepo repo;
    public List<Product> getAllProducts() {
        return repo.findAll();
    }
    public Product addProduct(Product product) {
        return repo.save(product);
    }
    public Product getProductById(int prodid) {
        return repo.findById(prodid).get();
    }
    public void updateProduct(Product prod) {
        repo.save(prod);
    }
    public void deleteProduct(int prodid) {
        repo.deleteById(prodid);
    }
    public List<Product> searchProducts(String keyword) {
        return repo.searchProducts(keyword);
    }
}
