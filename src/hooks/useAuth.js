import { useContext } from "react";
import context from "../contexts/UserContext";

export default function useAuth() {
  return useContext(context);
}
