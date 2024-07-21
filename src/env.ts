import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// Verificando se as variáveis de ambiente estão corretas conforme o schema
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    // Flatten deixo os erros mais legíveis
    console.error('Invalid environment variables:', parsedEnv.error.flatten().fieldErrors);
    // Lançando um erro para que o build falhe caso as variáveis de ambiente não estejam corretas
    throw new Error('Invalid environment variables');
}


// Variaveis ambientes já validadas
export const env = parsedEnv.data;
