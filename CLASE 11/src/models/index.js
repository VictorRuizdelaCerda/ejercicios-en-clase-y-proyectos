import sequelize from "../config/db.js";
import Author from "./author.js";
import Book from "./Book.js";

Author.hasMany(Book, {
     foreignKey: Id, as: "FK_AuthorId"
    }); 

Book.belongsTo(Author, {
        foreignKey: authorId, as: "FK_AuthorBook"
});

