import { z } from "zod";

export const ErrorMessages = {
  first_name: "Please enter a valid name.",
};

export const FormSchema = z.object({
  first_name: z
    .string({
      required_error: ErrorMessages.first_name,
      invalid_type_error: ErrorMessages.first_name,
    })
    .min(1, { message: ErrorMessages.first_name })
    .max(128, { message: ErrorMessages.first_name }),
});
