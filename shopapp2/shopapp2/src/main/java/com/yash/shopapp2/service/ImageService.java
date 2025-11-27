package com.yash.shopapp2.service;

import org.springframework.web.multipart.MultipartFile;

import com.yash.shopapp2.dto.ImageDto;
import com.yash.shopapp2.model.Image;

import java.util.List;

public interface ImageService {
    Image getImageById(Long imageId);
    void deleteImageById(Long imageId);
    void updateImage(MultipartFile file, Long imageId);
    List<ImageDto> saveImages(Long productId, List<MultipartFile> files);

}
