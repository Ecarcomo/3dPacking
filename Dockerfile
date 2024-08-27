FROM nikolaik/python-nodejs
WORKDIR /app

#Instalo los requerimientos para python
COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .

RUN npm install 

CMD [ "npm", "start"]

EXPOSE 3000

