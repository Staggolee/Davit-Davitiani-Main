import { GET_ERRORS } from "./types";

export const getErrors = errors => ({
  type: GET_ERRORS,
  payload: errors,
});
