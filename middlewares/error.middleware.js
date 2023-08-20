function errorHandler(err, req, res, next) {
   console.log(err); // In ra lỗi trong console (có thể thay đổi hoặc gửi lỗi tới hệ thống giám sát)

   let statusCode = 500; // Mã lỗi mặc định là 500 (Lỗi máy chủ)
   let message = "Internal Server Error"; // Thông điệp lỗi mặc định

   if (err instanceof Error) {
     // Nếu lỗi là một đối tượng Error, lấy thông điệp lỗi và mã lỗi nếu có
     message = err.message || message;
     statusCode = err.status || statusCode;
   }

   res.status(statusCode).json({ message, statusCode }); // Trả về phản hồi lỗi với mã lỗi và thông điệp
}
module.exports = {
     errorHandler
}