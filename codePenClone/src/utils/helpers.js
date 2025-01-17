import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firbaseConfig';

const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleAuthProvider);
  window.location.reload();
};
export const signInWithGithub = async () => {
  await signInWithPopup(auth, githubProvider);
  window.location.reload();
};

export const menu=[
  { name:"Project", uri:'/projects'},
  { name:"Collections", uri:'/collections'},
  { name:"Profile", uri:'/profile'},
]

export const onClickSignOut=async()=>{
 await auth.signOut()
  window.location.reload();
 
};
