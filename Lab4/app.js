const todoItems = require("./todo");
const connection = require("./mongoConnection");

const main = async () => {
    let createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
  console.log("first task created");
  console.log(createdTask);

    let allTasks = await todoItems.getAllTasks();
    console.log(allTasks);

  

  
  

  /*console.log(post);
  console.log("Let's change the title...");

  const updatedPost = await posts.updatePost(
    post._id,
    "For Love of Bleu d'Auvergne",
    post.body,
    post.poster.id
  );

  console.log("Now, the post is:");
  console.log(updatedPost);
  console.log("That's all, folks!");

  await posts.removePost(updatedPost._id);

  const db = await connection();
  await db.close();

  console.log("Done!"); */
};

main();
