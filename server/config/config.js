require("dotenv").config();

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL", // This will use DATABASE_URL from .env
    dialect: "postgres",
  },
  test: {
    use_env_variable: "DATABASE_URL", // Optionally use the same for testing
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL", // Use DATABASE_URL for production
    dialect: "postgres",
  },
};
