const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Check for token in Authorization header (format: "Bearer TOKEN")
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
      }

      // Verify token safely inside try-catch
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded; // Attach user info to request object
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
