import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (error) {
      console.log(error);
      alert("Something Went wrong");
    }
  }

  calcTime() {
    /* Assuming that we need 15min for each 3 ingredients */
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServing() {
    this.servings = 4;
  }

  parseIngredients() {
    const unitsLong = ["tablespoons","tablespoon","ounces","ounce","teaspoons","teaspoon","cups","pounds",];
    const unitsShort = ["tbsp","tbsp","oz","oz","tsp","tsp","cup","pounds",];
    const units = [...unitsShort, 'kg', 'g'];

      const newIngredients = this.ingredients.map((el) => {
        //uniform units
        let ingredient = el.toLowerCase();
        unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, units[i]);
        });
        //remove the parenthesis
        ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

        //Parse the ingredient into count unit and ingredient
        const arrIng = ingredient.split(" ");
        const unitIndex = arrIng.findIndex((el2) => unitsShort.includes(el2));



        let objIng;
        if (unitIndex > -1) {
          //there is a unit at third position
          const arrCount = arrIng.slice(0, unitIndex);
          //Ex.. 4 1/2 cups.So arrCount is [4,1/2]
          // Ex: 4 cups . So arrCount [4]
          let count;
          if(arrCount.length === 1){
            count = eval(arrIng[0].replace('-','+'));
          }else{
            count = eval(arrIng.slice(0,unitIndex).join('+'));
            // eval function will calculate the string using math func. like eval(4+1/2 )=4.5
          }

          objIng = {
            count,
            unit : arrIng[unitIndex],
            ingredient: arrIng.slice(unitIndex+1).join(' ')
          };
        } else if (parseInt(arrIng[0], 10)) {
          //there is no unit but 1st element of the string
          objIng = {
            count: parseInt(arrIng[0], 10),
            unit: "",
            ingredient: arrIng.slice(1).join(" "),
          };
        } else if (unitIndex === -1) {
          //there is no unit and no no number in first string
          objIng = {
            count: 1,
            unit: "",
            ingredient, //equivalent to ingredient : ingredient
          };
        }

        return objIng;
      });
      this.ingredients = newIngredients;
  }
  updateServings(type){
    //servings
    const newservings = type==='dec' ? this.servings-1:this.servings+1;
    //ingredients
    this.ingredients.forEach(ing => {
      ing.count *= (newservings/this.servings);
    })

    this.servings = newservings;
  }
}
