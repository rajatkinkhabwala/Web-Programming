const express = require("express");
const router = express.Router();
const data = require("../data");
const commentData = data.recipes;

router.get("/:commentId", async (req, res) => {
    try{
        const comment = await commentData.getCommentById(req.params.commentId);
        res.json(comment);
        // console.log(comment);
    } catch (e){
        res.status(404).json({error: "Comment not found"});
    }
});

router.get("/recipe/:recipeId", async(req, res) => {
    try{
        const commentList = await commentData.getCommentByRecipeId(req.params.recipeId);
        res.json(commentList);
    } catch(e){
        res.sendStatus(500);
    }
});

router.post("/:recipeId", async(req, res) => {
    const commentsdata = req.body;
    try{
        const { poster, comment} = commentsdata;
        // console.log(req.params.recipeId)
        const newComment = await commentData.addComment(req.params.recipeId, poster, comment);

        res.json(newComment);
    } catch(e){
        res.status(500).json({error: e});
    }
});

router.put("/:recipeId/:commentId", async(req, res) => {
    const updatedData = req.body;
    try{
        // console.log("inside try 1");
        await commentData.getCommentById(req.params.commentId);
    } catch(e){
        res.status(404).json({error: "Recipe not found"});
    }

    try{
        // console.log("inside try 2");
        const updatedComment = await commentData.updateComment(req.params.recipeId, req.params.commentId, updatedData);
        res.json(updatedComment);
    } catch(e){
        res.status(500).json({error: e});
    }
});

router.delete("/:id", async(req, res) => {
    try{
        await commentData.getCommentById(req.params.id);
    } catch(e){
        res.status(404).json({error: "Comment not found"});
        return;
    }

    try{
        await commentData.removeComment(req.params.id);
        res.sendStatus(200);
    } catch(e){
        res.sendStatus(500);
        return;
    }
});

module.exports = router;