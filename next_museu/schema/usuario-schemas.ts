import z from 'zod';

export const UsuarioSchema = z.object({
  idUsuario: z.number(),
  username: z
    .string()
    .min(5, 'Username must be at least 5 characters.')
    .max(32, 'Username must be at most 32 characters.'),
  email: z
    .string()
    .min(20, 'Email must be at least 20 characters.')
    .max(100, 'Email must be at most 100 characters.')
    .email('Email inválido.'),
});

export type UsuarioCreate = z.infer<typeof UsuarioSchema>;

export type UsuarioUpdate = z.infer<typeof UsuarioSchema>;

export type UsuarioResponse = z.infer<typeof UsuarioSchema>;
