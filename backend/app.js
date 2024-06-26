const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const { verifyToken, authorizeRoles } = require("./middleware/auth");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

// Protect routes
app.use("/api/doctors", verifyToken, authorizeRoles("doctor"));
app.use("/api/patients", verifyToken, authorizeRoles("patient", "doctor"));
app.use(
  "/api/passwordchange",
  verifyToken,
  authorizeRoles("patient", "doctor")
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
