import { useMutation } from "@tanstack/react-query";
import { RegisterRequestParam, RegisterResponseParam } from "constanst/DTOs";
import Toast from "react-native-toast-message";
import endpoints from "services/endpoints";
import thinktankAPI from "services/thinktankApi";

const useRegister = () => {
  const { isError, error, data, isPending, mutateAsync } = useMutation({
    mutationFn: (variables: RegisterRequestParam) => {
      return thinktankAPI.post<RegisterRequestParam, RegisterResponseParam>(
        endpoints.sign_up_account,
        variables
      );
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error?.response || "Đã có lỗi xảy ra"
      });
    }
  });
  return {
    isLoading: isPending,
    isError,
    error,
    data,
    onRegister: mutateAsync
  };
};

export default useRegister;
