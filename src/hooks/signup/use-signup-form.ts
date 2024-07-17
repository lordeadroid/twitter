import { useForm, UseFormReturnType } from "@mantine/form";
import { TSignupFormData } from "../../utils/types";
import { INIT_SIGNUP_FORM_VALUES } from "../../utils/constant";
import formValidator from "../../utils/form-validator";

const useSignupForm = () => {
  const signupForm: UseFormReturnType<TSignupFormData> = useForm({
    mode: "uncontrolled",
    initialValues: INIT_SIGNUP_FORM_VALUES,
    validate: formValidator,
  });

  return signupForm;
};

export default useSignupForm;
