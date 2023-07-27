# DB dumping command

- import
  \copy [target_table] to '/tmp/test.csv' DELIMITER ',' CSV;

- export
  \copy [target_table] from '/tmp/test.csv' DELIMITER ',' CSV;

# Errors

- docker build network error
  sudo docker build --network host -t nextjs13:1.0.3 .

- prisma no lib error
  add `binaryTargets = ["native", "debian-openssl-1.1.x", "linux-musl"]` in generate client object

# db info

- postgresql
- in postgresql container: psql portfolio -U postgresdev
