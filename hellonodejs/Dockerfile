FROM node
COPY code /code
RUN cd /code && npm install
EXPOSE 4000
CMD ["node", "/code/server.js"]
