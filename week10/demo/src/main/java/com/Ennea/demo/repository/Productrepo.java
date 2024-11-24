package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Product;
@Repository
    public interface Productrepo extends JpaRepository<Product,Integer>{
        @Query("select p from Product p where " +  "lower(p.title) like lower(concat('%',:keyword,'%')) ")
        List<Product> searchProducts(String keyword);

    }
