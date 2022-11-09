// 게시글 

module.exports = (sequelize,  DataTypes) => {
    const Image = sequelize.defile(
      "Image",
      {
        src: {    // 이미지 경로 
          type: DataTypes.STRING(200),
          allowNull: false,
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 한글 저장
      }
    );
    Image.associate = (db) => {};
    return Image;
  };