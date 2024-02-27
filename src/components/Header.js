import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/config/firebase";
import { AVATAR_URL } from "../Utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.userSlice);

  let url;
  if (currentUser) {
    url = currentUser.avatarUrl;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            name: displayName,
            email: email,
            uid: uid,
            avatarUrl: AVATAR_URL,
          })
        );

        navigate("/Home");
      } else {
        navigate("/");
      }
    });
  }, []);

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };

  return (
    <div className="flex justify-between  absolute w-full p-8">
      <img
        className="w-52 bg-gradient-to-b from-gray-900"
        src={require('../Utils/assets/images/netflixLogo.png')}
        alt="logo"
      />

      {currentUser && (
        <div className="flex justify-center h-fit">
          <div className="px-4">
            <img src={url} alt="loginAvatar" className="w-10 rounded-3xl" />
          </div>
          <button className="text-sm" onClick={signOutFunc}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
