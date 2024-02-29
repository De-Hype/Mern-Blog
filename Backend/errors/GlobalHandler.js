const NotFound = (req, res, next) =>{
    const error = new Error(`Not found - ${req.orinalUrl}`);
    res.status(404);
    next(error);
};

const GlobalHandler =(err, req, res, next) =>{
    let statusCode = res.statusCode || 200 ? 500 : res.statusCode;
    let message = err.message 
    res.status(statusCode).json({message, stack:err.stack, err})
}
module.exports = GlobalHandler;