import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { fireAuth } from "../../services/firebase";
import { useRecoilState } from "recoil";
import { userState, loadingState } from "../../states/userState";
const AuthGuard = ({ children }) => {
  const router = useRouter();
  const [loading, setloading] = useRecoilState(loadingState);
  const [user, setUser] = useRecoilState(userState);
  React.useEffect(() => {
    const unsubscribed = fireAuth.onAuthStateChanged((person) => {
      console.log(person);
      setloading(true);
      if (!person) {
        setUser(null);
        setloading(false);
        return;
      }
      setUser({
        uid: person.uid,
        email: person.email,
        username: person.displayName,
        profile: person.photoURL,
      });
      setloading(false);
    });
    return () => unsubscribed();
  }, []);

  React.useEffect(() => {
    console.log(user);
    if (!loading && !user) {
      router.push("/Login");
    }
  }, [user, loading]);

  return <div>{children}</div>;
};

export default AuthGuard;
