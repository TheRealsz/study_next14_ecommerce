import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
// Criando um schema para validar as variáveis de ambiente de servidor e cliente
export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  // Definindo variáveis de ambiente que podem ser acessadas em tempo de execução. O NextJS acaba por verificar as variaveis nao utilizadas e nao as inclui no bundle.
  // Fazendo isso, garantimos que elas serão incluídas no bundle e poderão ser acessadas em tempo de execução.
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL

  },

});