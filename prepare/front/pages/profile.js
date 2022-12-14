import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>내 프로필 | Nodebird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList herder="팔로잉" data={me.Followings} />
        <FollowList herder="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
