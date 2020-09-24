import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import Likes from "./models/Likes";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
import { elements, renderLoader, clearLoader } from "./views/base";
/*
    Global state of the app
        -search object
        -current recipe obj
        -shopping obj
        -liked recipe

*/
const state = {};
/*
 *Search Controller
 */
const controlSearch = async () => {
  // get query from searchView
  const query = searchView.getInput();

  if (query) {
    //new search object and add to the state
    state.search = new Search(query);

    //Prepare for the UI
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchResult);

    try {
      //search for recipe
      await state.search.getResults();

      //Render on the UI
      clearLoader();
      searchView.renderResults(state.search.result);
    } catch (error) {
      alert('Error occured while getting Recipe');
      clearLoader();
    }

  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});


elements.searchResultPages.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");
  /* closest matches that whether the any closet any element cosists of the .btn-inline class */
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/*
 *Recipe Controller
 */

 const controlRecipe =async ()=>{
   //Get the ID from url
  const id = window.location.hash.replace('#','');
  if(id){
    //prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    //Highlight Selected search item
    if(state.search){
       searchView.highlightSelected(id);
    }


    //create new recipe object
    state.recipe = new Recipe(id);

    try {
      //Get recipe data and parsing the ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      //calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServing();

      //Render recipe
      clearLoader();
      recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
        );
    } catch (error) {
      alert("Error Processing Recipe");
      console.log(error);
    }
  }
 };
/*
  window.addEventListener('hashchange',controlRecipe);
  window.addEventListener('load',controlRecipe);

  the above code is equivalent to the code written below
*/
['hashchange','load'].forEach(event=>window.addEventListener(event,controlRecipe));

/*
 LIST CONTROLLER
*/
const controlList=()=>{
  //create new list if there is or yet any
  if(!state.list){
    state.list =  new List();
  }

  //add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el=>{
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
}

//handle delete and update list item events
elements.shopping.addEventListener('click',e=>{
  const id = e.target.closest('.shopping__item').dataset.itemid;

  //handle the delete button
  if(e.target.matches(".shopping__delete, .shopping__delete *")){
    //delete from the state
    state.list.deleteItem(id);

    //delete from UI
    listView.deleteItem(id);

    //handle count update
  }else if(e.target.matches(".shopping__count-value")){
    const val = parseFloat(e.target.value);
    state.list.updateCount(id,val);
  }
});

/* LIKES CONTROLLER */
const controlLike = ()=>{
  if(!state.likes){
    state.likes = new Likes();
  }
  const currentId = state.recipe.id;

  // user has not yet liked the current recipe
  if(!state.likes.isLiked(currentId)){
    //add like to the state
    const newLike = state.likes.addLike(
      currentId,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    //toggle the like button
      likesView.toggleLikeBtn(true);

    //Add like to the UI list
      likesView.renderLike(newLike);

    // user has this recipe already liked
  }else{
    //remove like from the state
    state.likes.deleteLike(currentId);
    //toggle like button
    likesView.toggleLikeBtn(false);
    //Remove like from the UI list
    likesView.deleteLike(currentId);
  }
  likesView.toggleLikesMenu(state.likes.getNumLikes());

}

//restore the liked items when the page loads
window.addEventListener('load',()=>{
  state.likes = new Likes();

  // read the storage for lked item upon load
  state.likes.readStorage();

  //toggle the like button
  likesView.toggleLikesMenu(state.likes.getNumLikes());

  // render the likes to the likes menu
  state.likes.likes.forEach(like => likesView.renderLike(like));
});


//handling recipe button clicks using the event deligation
elements.recipe.addEventListener('click',e => {

    if (e.target.matches(".btn-decrease, .btn-decrease *")) {
      /*
        .matches(".btn-decrease, .btn-decrease *") : means that the element matches .btn-decrease class element or any of the chid elements
      */
      //decrease btn clicked
      if (state.recipe.servings > 1) {
        state.recipe.updateServings("dec");
        recipeView.updateServingsIngredients(state.recipe);
      }
    } else if (e.target.matches(".btn-increase, .btn-increase *")) {
      //increase btn clicked
      state.recipe.updateServings('inc');
      recipeView.updateServingsIngredients(state.recipe);
    }else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
      //adding ingredients to the shopping list
      controlList();
    }else if(e.target.matches(".recipe__love, .recipe__love *")){
      // like controller
      controlLike();
    }
});
