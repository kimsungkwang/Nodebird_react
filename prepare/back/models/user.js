// 회원 정보

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // 사용자 정보
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수 인지 아닌지 ( TURE: 선택, false: 필수 )
        unique: true, // 고유한 값
      },
      nuckname: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수 인지 아닌지 ( TURE: 선택, false: 필수 )
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, // 필수 인지 아닌지 ( TURE: 선택, false: 필수 )
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    }
  );
  User.associate = (db) => {
    // 유저와 포스트 간 일대다 관계
    db.User.hasMany(db.Post);
    // 유저와 댓글 간 일대다 관계
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    db.User.belongsToMany(db.Post, { through: "Follow", as: "Followers", foreignKey: "FollowingId" });
    db.User.belongsToMany(db.Post, { through: "Follow", as: "Followings", foreignKey: "FollowerId" });
  };
  return User;
};
