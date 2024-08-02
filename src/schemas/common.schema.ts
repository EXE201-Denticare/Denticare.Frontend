import * as z from "zod"

export const CommonResSchemaBase = z.object({
  statusCode: z.coerce.number(),
  message: z.string(),
})

export const createCommonResSchema = <T extends z.ZodTypeAny>(
  responseSchema: T
) =>
  CommonResSchemaBase.extend({
    response: responseSchema,
  })
