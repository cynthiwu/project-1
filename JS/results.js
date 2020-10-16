$(document).ready(function() {

    let recipesArr = JSON.parse(localStorage.getItem("recipes-list")) || [];
    console.log(recipesArr);

    if (recipesArr) {

        for (let i = 0; i < recipesArr.length; i++) {
            // response calls
            let recipeImg = $("<td>").append("<img>").attr("src", recipesArr[i].recipe.image);
            let recipeName = $("<td>").text(recipesArr[i].recipe.label);
            let cookTime = $("<td>").text(recipesArr[i].recipe.totalTime);
            let servingSize = $("<td>").text(recipesArr[i].recipe.yield);
            let recipeLink = $("<td>").text(recipesArr[i].recipe.url);

            // html establishment
            let tableRowEl = $("<tr>");
            
            $("#table-body").append(tableRowEl);

            tableRowEl.append(recipeImg);
            tableRowEl.append(recipeName);
            tableRowEl.append(cookTime);
            tableRowEl.append(servingSize);
            tableRowEl.append(recipeLink);

            console.log("working");
        }
    }
})
