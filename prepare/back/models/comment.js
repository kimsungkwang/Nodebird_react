// 댓글 

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.defile(
      {
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
      }
    );
    Comment.associate = (db) => {};
    return Comment;
  };