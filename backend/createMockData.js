const pool = require("./config/database");

const createMockData = async () => {
  const users = [
    {
      username: "bow",
      password: "123456789",
      role: "patient",
    },
    {
      username: "duyanh",
      password: "123456789",
      role: "doctor",
    },
  ];

  try {
    for (const user of users) {
      const [rows] = await pool.query(
        "SELECT * FROM users WHERE username = ?",
        [user.username]
      );
      if (rows.length === 0) {
        await pool.query(
          "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
          [user.username, user.password, user.role]
        );
        console.log(`Inserted user: ${user.username}`);
      } else {
        console.log(`User already exists: ${user.username}`);
      }
    }
  } catch (error) {
    console.error("Error creating mock data:", error);
  }
};

createMockData();
