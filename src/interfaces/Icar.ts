import { z } from 'zod';
import { VehicleSchema } from './IVehicle'; 

export const CarSchema = VehicleSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof CarSchema>;