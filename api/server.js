const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const postsRouter = require('../posts/posts-router.js');
const commentsRouter = require('../comments/comments-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRouter);
server.use('/posts', postsRouter);
server.use('/comments', commentsRouter);

module.exports = server;