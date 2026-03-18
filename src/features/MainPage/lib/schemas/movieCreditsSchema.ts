import * as z from 'zod';

export const BasePersonSchema = z.object({
  adult: z.boolean(),
  gender: z.number().int().min(0).max(3),
  id: z.number().int().positive(),
  known_for_department: z.string(),
  name: z.string().min(1),
  original_name: z.string().min(1),
  popularity: z.number().nonnegative(),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
});

export const CastMemberSchema = BasePersonSchema.extend({
  cast_id: z.number().int().optional(),
  character: z.string(),
  order: z.number().int().min(0),
});

export const CrewMemberSchema = BasePersonSchema.extend({
  department: z.string(),
  job: z.string(),
});

export const MovieCreditsSchema = z.object({
  id: z.number().int().positive(),
  cast: z.array(CastMemberSchema),
  crew: z.array(CrewMemberSchema),
});
