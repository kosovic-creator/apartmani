import { z } from 'zod';

const TodoUpdateSchema = z.object({
  title: z.string().min(1, 'Naslov je obavezan'),
  priority: z.number().min(1).max(5, 'Prioritet mora biti između 1 i 5'),
  details: z.string().min(5, 'Detalji moraju imati najmanje 5 karaktera'),

});

export default TodoUpdateSchema;