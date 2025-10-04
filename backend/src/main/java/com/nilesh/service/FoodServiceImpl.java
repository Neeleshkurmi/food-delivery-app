package com.nilesh.service;

import com.nilesh.model.Category;
import com.nilesh.model.Food;
import com.nilesh.model.Restaurant;
import com.nilesh.repository.FoodRepository;
import com.nilesh.request.CreateFoodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FoodServiceImpl implements FoodService{

    @Autowired
    private FoodRepository foodRepository;

    @Override
    public Food createFood(CreateFoodRequest req, Category category, Restaurant restaurant) {
        Food food = new Food();
        food.setFoodCategory(category);
        food.setRestaurant(restaurant);
        food.setDescription(req.getDescription());
        food.setImages(req.getImages());
        food.setName(req.getName());
        food.setPrice(req.getPrice());
        food.setIngredientsItems(req.getIngredientsItems());
        food.setSeasonal(req.isSeasonal());
        food.setVegetarian(req.isVegetarian());
        food.setCreationDate(new Date());

        Food foods = foodRepository.save(food);
        restaurant.getFoods().add(foods);

        return foods;
    }

    @Override
    public void deleteFood(Long foodId) throws Exception {

        Food food = findFoodById(foodId);
        food.setRestaurant(null);
        foodRepository.save(food);

    }

    @Override
    public List<Food> getRestaurantFood(Long restaurantId,
                                        boolean isVegetarian,
                                        boolean isNonVeg,
                                        boolean isSeasonal,
                                        String foodCategory) {

        List<Food> foods = foodRepository.findByRestaurantId(restaurantId);

        // Filter by vegetarian (if requested, exclude non-vegetarian)
        if (isVegetarian) {
            foods = foods.stream()
                    .filter(Food::isVegetarian)
                    .collect(Collectors.toList());
        }

        // Filter by non-vegetarian (if requested, exclude vegetarian)
        if (isNonVeg) {
            foods = foods.stream()
                    .filter(food -> !food.isVegetarian())
                    .collect(Collectors.toList());
        }

        // If both vegetarian and nonveg are false, show all (no filtering)
        // If both are true, it should return empty list (contradictory filters)
        if (isVegetarian && isNonVeg) {
            foods = new ArrayList<>(); // contradictory filters
        }

        if (isSeasonal) {
            foods = foods.stream()
                    .filter(Food::isSeasonal)
                    .collect(Collectors.toList());
        }

        if (foodCategory != null && !foodCategory.trim().isEmpty()) {
            foods = foods.stream()
                    .filter(food -> foodCategory.equals(food.getFoodCategory()))
                    .collect(Collectors.toList());
        }

        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodCategory) {

        return foods.stream().filter(food -> {
            if(food.getFoodCategory()!=null){
                return food.getFoodCategory().getName().equals(foodCategory);
            }
            return false;
        }).collect(Collectors.toList());
    }

    private List<Food> filterBySeasonal(List<Food> foods, boolean isSeasonal) {
        return foods.stream().filter(food -> food.isSeasonal()==isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterByNonveg(List<Food> foods, boolean isNonVeg) {
        return foods.stream().filter(food -> food.isVegetarian()==false).collect(Collectors.toList());
    }

    private List<Food> filterByVegetarian(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(food -> food.isVegetarian()==isVegetarian).collect(Collectors.toList());
    }

    @Override
    public List<Food> searchFood(String keyword) {
        return foodRepository.searchFood(keyword);
    }

    @Override
    public Food findFoodById(Long foodId) throws Exception {
        Optional<Food> optionalFood = foodRepository.findById(foodId);

        if(optionalFood.isEmpty()){
            throw new Exception("food not exit....");
        }
        return optionalFood.get();
    }

    @Override
    public Food updateAvailabilityStatus(Long foodId) throws Exception {
        Food food = findFoodById(foodId);
        food.setAvailable(!food.isAvailable());
        return foodRepository.save(food);
    }
}
