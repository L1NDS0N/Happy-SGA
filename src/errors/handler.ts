import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: "Validation fails", errors });
  }
  console.error(error);

  return response.status(418).json({
    message:
      "O servidor se recusa a coar café em um bule de chá, entre em contato através das mídias do desenvolvedor https://github.com/l1nds0n para obter suporte",
  });
};

export default errorHandler;
