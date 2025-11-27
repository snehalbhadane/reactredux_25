package com.yash.shopapp2.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.yash.shopapp2.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
