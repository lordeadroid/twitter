import { useForm, UseFormReturnType } from "@mantine/form";
import { TLoginFormData } from "../../utils/types";
import { INIT_LOGIN_FORM_VALUES } from "../../utils/constant";
import formValidator from "../../utils/form-validator";

const useLoginForm = () => {
  const loginForm: UseFormReturnType<TLoginFormData> = useForm({
    mode: "uncontrolled",
    initialValues: INIT_LOGIN_FORM_VALUES,
    validate: formValidator,
  });

  return loginForm;
};

export default useLoginForm;
