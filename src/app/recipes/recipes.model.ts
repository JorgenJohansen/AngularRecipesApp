import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    private name: string;
    private description: string;
    private imagePath: string;
    private ingredients: Ingredient[];

    public getName() {
        return this.name;
    }
    public setName(name:string){
        this.name = name;
    }
    public getDescription() {
        return this.description;
    }
    public setDescription(description:string){
        this.description = description;
    }
    public getImagePath() {
        return this.imagePath;
    }
    public setImagePath(imagePath:string){
        this.imagePath = imagePath;
    }
    public getIngredients() {
        return this.ingredients;
    }

    constructor(name:string,description:string, imagePath:string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}