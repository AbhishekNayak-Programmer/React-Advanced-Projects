import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: (user) => {
      toast.success(
        "Account is created successfully! Please verify the new account from the user's email address"
      );
    },
  });

  return { signup, isLoading };
};
