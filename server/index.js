const path = require('path');
const express = require('express');
const jsonServer = require('json-server');

const dbPath = path.resolve(__dirname, '../database/db.json');
const server = jsonServer.create();
const endpoints = jsonServer.router(dbPath);
const PORT = process.env.PORT;

server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));
server.use('/api', endpoints);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('JSON Server listening on port', PORT);
});
