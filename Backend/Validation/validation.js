const {z} = require('zod')

const validationSchema = z.object({
    username : z
    .string({required_error : "username not defined."})
    .trim()
    .min(6, {message: "minimum character should be 6"})
    .max(60, {message: "maximum character should not exceed 60 chars."}),
    password: z
    .string({required_error: "password is required"})
    .trim()
    .min(8,{message : "minimum length must be 8 charachters"})
    .max(255, {message:"maximum leangth must not exceed 255 chars"})
    .superRefine((value, ctx) => {
      const hasSpecialChar = /[!@#$%^&*]/.test(value);
      const hasNoSpaces = !/\s/.test(value);
      const hasNumber = /\d/.test(value);
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);

      if (!hasSpecialChar || !hasNoSpaces || !hasNumber || !hasUppercase || !hasLowercase) {
          ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: 'Password does not meet complexity requirements',
          });
      }
  }),
    email: z
    .string({required_error: "email is required"})
    .email({message:"enter valid email"})
    .min(8,{message : "minimum length must be 8 charachters"})
    .max(255, {message:"maximum leangth must not exceed 255 chars"}),

    Uinfo : z.object( {
        firstName : z
        .string({required_error: "First name required"})
        .min(3, {message: "name required"}),
        lastName : z
        .string({required_error: "First name required"})
        .min(3, {message: "name required"}),
        phoneNumber : z
        .string({message: "phonenumber required"})
        .length(10, { message: "Phone number must be exactly 10 characters long." }),
        dob: z
        .string({message:"dob date required"})
    })

})

module.exports = validationSchema

