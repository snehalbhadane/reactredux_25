package com.yash.shopapp2.service;



import java.util.List;

import com.yash.shopapp2.model.Product;
import com.yash.shopapp2.request.AddProductRequest;
import com.yash.shopapp2.request.ProductUpdateRequest;

public interface ProductService {
    Product addProduct(AddProductRequest product);
    Product updateProduct(ProductUpdateRequest product, Long productId);
    Product getProductById(Long productId);
    void deleteProductById(Long productId);

    List<Product> getAllProducts();
    List<Product> getProductsByCategoryAndBrand(String category, String brand);
    List<Product> getProductsByCategory(String category);
    List<Product> getProductsByBrandAndName(String brand, String name);
    List<Product> getProductsByBrand(String brand);
    List<Product> getProductsByName(String name);

}
