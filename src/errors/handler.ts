import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(418).json({
    message:
      "O servidor diz que é impossível coar café em um bule de chá, entre em contato através das mídias do desenvolvedor https://github.com/l1nds0n",
  });
};

export default errorHandler;
