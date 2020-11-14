import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(418).json({
    message:
      "O servidor se recusa a coar café em um bule de chá, entre em contato através das mídias do desenvolvedor https://github.com/l1nds0n para obter suporte",
  });
};

export default errorHandler;
