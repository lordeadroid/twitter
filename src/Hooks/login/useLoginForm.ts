import { useForm, UseFormReturnType } from "@mantine/form";
import { TLoginFormData } from "../../Utils/types";
import { INIT_LOGIN_FORM_VALUES } from "../../Utils/constant";
import formValidator from "../../Utils/form-validator";

const useLoginForm = () => {
  const loginForm: UseFormReturnType<TLoginFormData> = useForm({
    mode: "uncontrolled",
    initialValues: INIT_LOGIN_FORM_VALUES,
    validate: formValidator,
  });

  return loginForm;
};

export default useLoginForm;
