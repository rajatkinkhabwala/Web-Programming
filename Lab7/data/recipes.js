const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;

const uuid = require("uuid");

const exportedMethods = {
    async getAllRecipes() {
        const recipesCollection = await recipes();
        return await recipesCollection.find({}, { title: 1 }).toArray();
    },
    
    async getRecipeById(id) {
        const recipesCollection = await recipes();
        const recipe = await recipesCollection.findOne({ _id: id });

        if (!recipe)
            throw "Recipe not found";
        return recipe;
    },
    async addRecipes(title, ingredients, steps) {
        if (typeof title !== "string" || title === "")
            throw "No title provided";

        if (!Array.isArray(ingredients)) {
            throw "There should a name and amount for the ingredients";
        }
        if (ingredients.length <= 0) {
            throw "There should be atleast one ingredients";
        }
        
        for (let i = 0; i < ingredients.length; i++) {
            if (typeof ingredients[i].name !== "string" || ingredients[i].name === "")
                throw "Name should be a string";
            if (typeof ingredients[i].amount !== "string" || ingredients[i].amount === "")
                throw "Please specify the amount in correct format ex. number ingredient name";
        }

        if (!Array.isArray(steps)) {
            throw "There should at least be one step";
        }
        if (steps.length <= 0) {
            throw "There should atleast be one step for your recipe";
        }

        for (let i = 0; i < steps.length; i++) {
            if (typeof steps[i] !== "string" || steps[i] === "")
                throw "You should define a proper method for making the recipe"
        }

        const recipesCollection = await recipes();

        const newRecipe = {
            _id: uuid.v4(),
            title: title,
            ingredients: ingredients,
            steps: steps,
            comments: []
        };

        const newRecipeInformation = await recipesCollection.insertOne(newRecipe);
        const newId = newRecipeInformation.insertedId;
        return await this.getRecipeById(newId);
    },

    async removeRecipe(id) {
        const recipesCollection = await recipes();
        const deletionInfo = await recipesCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }
    },
    async updateRecipe(id, updatedRecipe) {
        const recipesCollection = await recipes();

        const updatedRecipeData = {};

        if (updatedRecipe.steps || updatedRecipe.steps === "") {
            if (!Array.isArray(updatedRecipe.steps)) {
                throw "There should at least be one step";
            }
            if (updatedRecipe.steps.length <= 0) {
                throw "There should atleast be one step for your recipe";
            }
        
            for (let i = 0; i < updatedRecipe.steps.length; i++) {
                if (typeof updatedRecipe.steps[i] !== "string" || updatedRecipe.steps[i] === "")
                    throw "You should define a proper method for making the recipe"
            }
            updatedRecipeData.steps = updatedRecipe.steps;
        }

        if (updatedRecipe.title || updatedRecipe.title === "") {
            if (typeof updatedRecipe.title !== "string" || updatedRecipe.title === "")
                throw "No title provided";
            updatedRecipeData.title = updatedRecipe.title;
        }

        if (updatedRecipe.ingredients || updatedRecipe.ingredients === "") {
            if (!Array.isArray(updatedRecipe.ingredients)) {
                throw "There should a name and amount for the ingredients";
            }
            if (updatedRecipe.ingredients.length <= 0) {
                throw "There should be atleast one ingredients";
            }
            
            for (let i = 0; i < updatedRecipe.ingredients.length; i++) {
                if (typeof updatedRecipe.ingredients[i].name !== "string" || updatedRecipe.ingredients[i].name === "")
                    throw "Name should be a string";
                if (typeof updatedRecipe.ingredients[i].amount !== "string" || updatedRecipe.ingredients[i].amount === "")
                    throw "Please specify the amount in correct format ex. number ingredient name";
            }
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }

        let updateCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipesCollection.updateOne(query, updateCommand);

        return await this.getRecipeById(id);
    },

    async getCommentByRecipeId(id) {
        const recipesCollection = await recipes();
        const recipe = await recipesCollection.findOne({ _id: id });
        let commentlist = [];

        if (!recipe)
            throw "There is no such recipe";

        let recipetitle = recipe.title;
        let recipecomment = recipe.comments;
       
        for (let i = 0; i < recipecomment.length; i++) {
             list = {
                _id: recipecomment[i]._id,
                recipeId: id,
                recipetitle: recipetitle,
                poster: recipecomment[i].poster,
                comment: recipecomment[i].comment
            };
            commentlist.push(list);
        }
        return commentlist;
    },

    async getCommentById(id) {
        const recipesCollection = await recipes();
        const recipe = await recipesCollection.findOne({"comments._id": id});
        const recipecomments = await recipesCollection.findOne({ "comments._id": id },{"comments.$": 1, _id: 0});
       

        if (!recipe)
            throw "There is no such recipe";
        if(!recipecomments)
            throw "There are no comments";
     
        let recipeId = recipe._id;
        let recipetitle = recipe.title;
        
        
        
        let commentlist = {
            _id: id,
            recipeId: recipeId,
            recipetitle: recipetitle,
            poster: recipecomments.comments[0].poster,
            comment: recipecomments.comments[0].comment
        }
       
        return commentlist;
    },

    async addComment(id, poster, comment) {

        if (typeof poster !== "string" || poster === "")
            throw "No poster name provided";

        if (typeof comment !== "string" || comment == "")
            throw "There are no comments";

        const recipesCollection = await recipes();

        const newComment = {
            _id: uuid.v4(),
            poster: poster,
            comment: comment
        };

        await recipesCollection.updateOne({ _id: id }, { $push: { comments: newComment } });

        return newComment;
    },

    async updateComment(recipeId, commentId, updatedComment) {
        const recipesCollection = await recipes();

        const updatedCommentData = {};
        if(updatedComment.poster || updatedComment.comment)
        {
            if(updatedComment.poster && updatedComment.comment)
            {
                
                if (typeof updatedComment.poster !== "string" || updatedComment.poster === "")
                throw "No poster name provided";
                if (typeof updatedComment.comment !== "string" || updatedComment.comment === "")
                throw "There are no comments to update";
                recipesCollection.updateOne(
                    {
                            _id: recipeId,
                            comments: { $elemMatch: {_id: commentId}}
                    },
                    { $set: {"comments.$.poster": updatedComment.poster, "comments.$.comment":updatedComment.comment}}
                    )

            }
            else if((!updatedComment.poster && updatedComment.comment) || (updatedComment.comment === ""))
            {
                
                recipesCollection.updateOne(
                    {
                            _id: recipeId,
                            comments: { $elemMatch: {_id: commentId}}
                    },
                    { $set: {"comments.$.comment":updatedComment.comment}}
                    )
            }
            else if((!updatedComment.comment && updatedComment.poster || (updatedComment.poster === "")))
            {
                
                recipesCollection.updateOne(
                    {
                            _id: recipeId,
                            comments: { $elemMatch: {_id: commentId}}
                    },
                    { $set: {"comments.$.poster":updatedComment.poster}}
                    )
            }
        }
        if (updatedComment.poster || (updatedComment.poster === "")) {
           
            if (typeof updatedComment.poster !== "string" || updatedComment.poster === "")
                throw "No name provided";

            await recipesCollection.updateOne(
            {
                    _id: recipeId,
                    comments: { $elemMatch: {_id: commentId}}
            },
            { $set: {"comments.$.poster": updatedComment.poster}}
            )
            updatedCommentData.poster = updatedComment.poster;
        }
        
        if (updatedComment.comment || (updatedComment.comment === "")) {
            if (typeof updatedComment.comment !== "string" || updatedComment.comment === "")
                throw "There are no comments to update";
                
            await recipesCollection.updateOne(
            {
                _id: recipeId,
                comments: { $elemMatch: {_id: commentId}}
            },
            { $set: {"comments.$.comment": updatedComment.comment}}
            )

            updatedCommentData.comment = updatedComment.comment;
        }
    
        
        
        const updatedRecipecomments = await recipesCollection.findOne({ "comments._id": commentId }, {"comments.$": 1, _id: 0});
        // console.log(updatedRecipecomments);
        return updatedRecipecomments.comments[0];
        
    },

        async removeComment(id) {
        const recipesCollection = await recipes();
        const deletionInfo = await recipesCollection.update({ "comments._id": id }, { $pull: { comments: { _id: id } } });
        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete recipe with id of ${id}`;
        }
    },

};

module.exports = exportedMethods;