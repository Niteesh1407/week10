package ennea.demo.repository;
import ennea.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface Productrepo extends JpaRepository<Product, Integer> {

}
