package com.nilesh.controller;

import com.nilesh.model.IngredientCategory;
import com.nilesh.model.IngredientsItem;
import com.nilesh.request.IngredientCategoryRequest;
import com.nilesh.request.IngredientRequest;
import com.nilesh.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    private IngredientService ingredientService;


    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientCategory(
            @RequestBody IngredientCategoryRequest req
    ) throws Exception {
        IngredientCategory item = ingredientService.createIngredientCategory(req.getName(), req.getRestaurantId());
        return new  ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientItem(
            @RequestBody IngredientRequest req
    ) throws Exception {
        IngredientsItem item = ingredientService.createIngredientItem(req.getRestaurantId(), req.getName(), req.getCategoryId());
        return new  ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PostMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updateStock(
            @PathVariable Long id
    ) throws Exception {
        IngredientsItem item = ingredientService.updateStock(id);
        return new  ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredient(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientsItem> item = ingredientService.findRestaurantsIngredients(id);
        return new  ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientCategory> item = ingredientService.findIngredientCategoryByRestaurantId(id);
        return new  ResponseEntity<>(item, HttpStatus.OK);
    }


}
