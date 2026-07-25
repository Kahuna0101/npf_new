import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, {
    error: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    error: "Last Name must be at least 2 characters.",
  }),
  email: z.email({ error: "Invalid email address." }),
  number: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number seems too long." }),
  subject: z.string().min(2, {
    error: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    error: "Message must be at least 2 characters.",
  }),
})

export const pencomConsentSchema = z.object({
  title: z.string().min(2, {
    error: "Title must be selected.",
  }),
  firstName: z.string().min(2, {
    error: "First Name must be at least 2 characters.",
  }),
  middleName: z.string().min(2, {
    error: "Middle Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    error: "Last Name must be at least 2 characters.",
  }),
  rsaPin: z.string().min(11, { message: "RSA PIN must be 12 digit" }).max(12, { message: "RSA PIN must be 12 digit" }),
  email: z.email({ error: "Invalid email address." }),
  number: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number seems too long." }),
  homeAddress: z.string().min(2, {
    error: "Address must be at least 2 characters.",
  }),
  town: z.string().min(2, {
    error: "Town must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    error: "Country must be at least 2 characters.",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the consent statement",
  }),
})

export const newsletterSchema = z.object({
  email: z.email(),
})

export const multiFundSchema = z.object({

  applicationType: z
    .string()
    .min(1, "Please select an application type"),

  penNo: z
    .string()
    .min(1, "PENSION number is required"),

  title: z
    .string()
    .min(1, "Please select your title"),

  surname: z
    .string()
    .min(2, "Surname is required"),

  firstName: z
    .string()
    .min(2, "First name is required"),

  middleName: z
    .string()
    .optional(),

  ippisNo: z
    .string()
    .min(1, "IPPIS number is required"),

  phoneNo1: z
    .string()
    .min(10, "Please enter a valid phone number"),

  phoneNo2: z
    .string()
    .optional(),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required"),

  email: z
    .email("Please enter a valid email address"),

  employerName: z
    .string()
    .min(2, "Employer name is required"),

  preferredFund: z
    .string()
    .min(1, "Please select your preferred Fund"),

  consent: z
    .boolean()
    .refine((value) => value === true, {
      message: "You must confirm your consent before submitting",
    }),
})