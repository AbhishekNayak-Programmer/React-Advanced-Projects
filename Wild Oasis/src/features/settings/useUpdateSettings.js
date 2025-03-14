import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { mutate: updateSettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingAPI,

    onSuccess: () => {
      toast.success("Edited settings successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSettings, isUpdating };
};
