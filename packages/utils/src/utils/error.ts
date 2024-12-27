export function error(module: string, scope: string, message: string) {
  throw new Error(`${module}/${scope}: ${message}`);
}

export function generateError(error: unknown): Error {
  if (error instanceof Error) return error;
  else return new Error(`${error}`);
}
