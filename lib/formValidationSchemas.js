import { z } from "zod";
import {
  EMAIL_CHAR_LIMIT,
  MESSAGE_CHAR_LIMIT,
  MESSAGE_MIN_CHAR_LIMIT,
  NAME_CHAR_LIMIT,
} from "./constants";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .max(
      NAME_CHAR_LIMIT,
      `Name can not be more than ${NAME_CHAR_LIMIT} characters.`,
    )
    .optional(),
  email: z
    .string()
    .trim()
    .max(
      EMAIL_CHAR_LIMIT,
      `Email can not be more than ${EMAIL_CHAR_LIMIT} characters.`,
    )
    .email("Please provide a valid email address."),
  message: z
    .string()
    .trim()
    .max(
      MESSAGE_CHAR_LIMIT,
      `Please keep your message within ${MESSAGE_CHAR_LIMIT} characters.`,
    )
    .min(
      MESSAGE_MIN_CHAR_LIMIT,
      `Please type a message, at least ${MESSAGE_MIN_CHAR_LIMIT} characters long.`,
    ),
});

export { contactFormSchema };
