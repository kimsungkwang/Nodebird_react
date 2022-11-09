// 게시글

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {
        // 이미지 경로
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);    // 게시글 1, 이미지 다  ==> 한개의 게시글에 다수의 이미지 
  };
  return Image;
};
