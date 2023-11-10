package com.utfpr.edu.br.projetojavareact.food;

public record FoodResponseDTO(Long id, String title, String image, Float price) {
    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }


}
