export function loggingMiddleware() {
  return (req, res, next) => {
    const currentTime = new Date();
    console.log(currentTime, req.method, req.originalUrl);

    next();
  };
}
