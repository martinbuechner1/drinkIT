FROM node:10
WORKDIR /app
COPY ./ /app
#git clone https://github.com/martinbuechner1/drinkIT.git
#WORKDIR /app/drinkIT
RUN npm install
RUN npm run build-dev
EXPOSE 8080

CMD ["npm", "start"]
