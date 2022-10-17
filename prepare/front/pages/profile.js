import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{ nickname: "김성광" }, { nickname: "홍길동" }, { nickname: "전우치" }];
  const followingList = [{ nickname: "김성광" }, { nickname: "홍길동" }, { nickname: "전우치" }];

  return (
    <>
      <Head>
        <title>내 프로필 | Nodebird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList herder="팔로잉 목록" data={followingList} />
        <FollowList herder="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
