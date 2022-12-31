import { GraphQLError } from "graphql";
import { MessageFormatter } from "class-validator-message-formatter/dist";

export const myFormatError = (error: GraphQLError) => {
  if (error.message.includes("Argument Validation Error")) {
    const { validationErrors } = error.extensions?.exception;
    const formattedErrors = MessageFormatter.format(validationErrors);
    return {
      message: error.message,
      constraints: formattedErrors,
    };
  } 
  
  else if (error.extensions?.code === "GRAPHQL_VALIDATION_FAILED") {
    return {
      message: "Field Required",
      extensions: error.extensions?.code,
    };
  } 

  return {
    message: error.message,
    extensions: error.extensions,
  };
};
