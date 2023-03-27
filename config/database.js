module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8ostla499fsd3rljdg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_g7fc'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '4PlfPg8dJNUCaabCFln2chZF2T75mO6m'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
