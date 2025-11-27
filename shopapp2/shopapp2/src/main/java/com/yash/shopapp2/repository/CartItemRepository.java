package com.yash.shopapp2.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.shopapp2.model.CartItem;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
  List<CartItem> findByProductId(Long productId);
}
