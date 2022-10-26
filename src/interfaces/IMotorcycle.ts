import { z } from 'zod';
import { VehicleSchema } from './IVehicle'; 

export const MotorSchema = VehicleSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

export type IMotorcycle = z.infer<typeof MotorSchema>;