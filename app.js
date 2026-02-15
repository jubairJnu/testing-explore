export function generateToken(logger) {
  const token = crypto.randomUUID(32).toString("hex");
  if (logger) logger(token);
  return token;
}
