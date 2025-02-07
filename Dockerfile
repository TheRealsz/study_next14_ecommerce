# Imagem base para rodar o projeto
FROM node:lts-alpine

# Diretorio de trabalho dentro do container
# Todas as operaçòes seguintes estarão aqui
WORKDIR /app

# Copia os arquivos de dependencia, caso nao mude, ficarão em cache
COPY package.json package-lock.json ./

# Instala dependencias antes de copiar o projeto todo
RUN npm i

# Copia todo o codigo para o container
# Se fizéssemos isso antes, qualquer mudança em um arquivo do código invalidaria o cache e forçaria uma nova instalação de dependências.
COPY . . 

# Definindo porta de comunicação 
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev"]