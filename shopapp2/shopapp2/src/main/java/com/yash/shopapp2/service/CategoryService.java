package com.yash.shopapp2.service;



import java.util.List;

import com.yash.shopapp2.model.Category;

public interface CategoryService {
    Category addCategory(Category category);
    Category updateCategory(Category category, Long categoryId);
    void deleteCategory(Long categoryId);
    List<Category> getAllCategories();
    Category findCategoryByName(String name);
    Category findCategoryById(Long categoryId);
}
