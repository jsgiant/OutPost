import { getToken } from "./storageUtils";

export const isSignedIn = () => {
   const token = getToken();
   return token !== undefined;
};