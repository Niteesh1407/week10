package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.*;
@Repository
    public interface Productrepo extends JpaRepository<Product,Integer>{
        @Query("select p from Product p where " +  "lower(p.title) like lower(concat('%',:keyword,'%')) ")
        List<Product> searchProducts(String keyword);

    }
