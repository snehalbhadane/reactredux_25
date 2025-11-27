package com.yash.shopapp2.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.shopapp2.model.OrderItem;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
  List<OrderItem> findByProductId(Long productId);
}
