import { useForm, UseFormReturnType } from "@mantine/form";
import { TSignupFormData } from "../../Utils/types";
import { INIT_SIGNUP_FORM_VALUES } from "../../Utils/constant";
import { signupFormValidator } from "../../Utils/form-validator";

const useSignupForm = () => {
  const signupForm: UseFormReturnType<TSignupFormData> = useForm({
    mode: "uncontrolled",
    initialValues: INIT_SIGNUP_FORM_VALUES,
    validate: signupFormValidator,
  });

  return signupForm;
};

export default useSignupForm;
