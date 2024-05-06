const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("./catchAsync");

exports.isAuthenticated = catchAsync(async (req, res, next) => {

    const { token } = req.cookies;

    if(!token) {
        return next(new ErrorHandler("Please Login to Access", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET || '1010b138ee8568df067e961851e4fea487c1ba5392ef2a8e691d851f81950eb0');
    req.user = await User.findById(decodedData.id);
    next();
});