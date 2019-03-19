const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const postsRouter = require('../posts/posts-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRouter);
server.use('/posts', postsRouter);

module.exports = server;