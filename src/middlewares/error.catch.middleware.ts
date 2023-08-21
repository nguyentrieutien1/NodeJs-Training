const catchErrorHandler = callback => {
     return ( req, res, next) => {
          callback(req, res, next).catch(next)
     };
}
export { catchErrorHandler };