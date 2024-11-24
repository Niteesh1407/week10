package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductService service;

    @RequestMapping("/")
    public String home(){
        return "Hello";
    }
    @GetMapping("/products")
    public ResponseEntity<List<Product>>getAllProducts(){
        return new ResponseEntity<>(service.getAllProducts(),HttpStatus.OK);
    }
    @PostMapping("/product")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        try{
            Product p1=service.addProduct(product);
            return new ResponseEntity<>(p1,HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/products")
    public void updateproduct(@RequestBody Product prod){
        service.updateProduct(prod);
    }
    @DeleteMapping("/products/{prodid}")
    public void deleteProduct(@PathVariable int prodid) {
        service.deleteProduct(prodid);
    }
    @GetMapping("/products/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword){
        List<Product> products=service.searchProducts(keyword);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}

