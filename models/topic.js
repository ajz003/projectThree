module.exports = function(sequelize, Sequelize) {
 
    var Topic = sequelize.define('Topic', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        owner: {
            type: Sequelize.STRING,
            allowNull: false
        },

        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        ownerId: {
            type: Sequelize.INTEGER
        }

 
    });

    Topic.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Topic.belongsTo(models.Category, {
          foreignKey: {
            allowNull: false
          },
          onDelete: "cascade"
          
        });

        Topic.hasMany(models.Post, {
            onDelete: "cascade",
            hooks: true
          });
      };

 
    return Topic;
 
}