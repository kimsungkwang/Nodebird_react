// 댓글 

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.defile(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        // UserId : 1;
        // PostId : 3; 
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
      }
    );
    Comment.associate = (db) => {
      db.Comment.belongsTo(db.User);
      db.Comment.belongsTo(db.Post);
    };
    return Comment;
  };