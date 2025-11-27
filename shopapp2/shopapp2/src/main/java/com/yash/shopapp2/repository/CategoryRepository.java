package com.yash.shopapp2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.shopapp2.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);

    boolean existsByName(String name);
}
