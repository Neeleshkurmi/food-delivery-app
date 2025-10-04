package com.nilesh.controller;

import com.nilesh.model.Food;
import com.nilesh.model.Restaurant;
import com.nilesh.model.User;
import com.nilesh.request.CreateFoodRequest;
import com.nilesh.service.FoodService;
import com.nilesh.service.RestaurantService;
import com.nilesh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,@RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        List<Food> food = foodService.searchFood(name);

        return new ResponseEntity<>(food,HttpStatus.OK);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(@PathVariable Long restaurantId,
                                                        @RequestParam(required = false, defaultValue = "false") boolean vagetarian,
                                                        @RequestParam(required = false, defaultValue = "false") boolean nonveg,
                                                        @RequestParam(required = false, defaultValue = "false") boolean seasonal,
                                                        @RequestParam(required = false) String food_category,
                                                        @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwtToken(jwt);
        List<Food> food = foodService.getRestaurantFood(restaurantId, vagetarian, nonveg, seasonal, food_category);
        return new ResponseEntity<>(food, HttpStatus.OK);
    }
}
