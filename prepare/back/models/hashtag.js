// 해시태그

module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.defile(
    "Hashtag",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 한글 저장
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post); // 다대다 관계
  };
  return Hashtag;
};
