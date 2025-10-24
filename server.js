import "dotenv/config";
import express from "express";
import cors from "cors";
import {
  disconnectPostgres,
  connectPostgres,
} from "./loaders/pgsqlConnection.js";
import authRouter from "./modules/auth/auth.routes.js";
import { createTables } from "./loaders/createTable.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { seedAdmins } from "./loaders/adminSeeder.js";
import productRouter from "./modules/products/products.routes.js";

const startServer = async () => {
  try {
    // await loader();

    const app = express();

    app.use(cors());

    app.use(express.json({ limit: "100mb" }));
    app.use(express.text());
    app.use(express.urlencoded({ extended: true, limit: "100mb" }));

    //DB loaders
    await connectPostgres();

    await createTables();

    await seedAdmins();

    //DB loaders

    app.use(express.json());

    //Routers
    app.use(`${process.env.API_PREFIX}/auth`, authRouter);
    app.use(`${process.env.API_PREFIX}/products`, productRouter);

    app.use(errorHandler);

    const server = app.listen(process.env.PORT, () => {
      console.info(`
		#############################################
		Server listening on port: ${process.env.PORT}
		#############################################
	`);
    });

    process.on("SIGTERM", (signal) => {
      void graceFullShutDown(signal, server);
    });
    process.on("SIGINT", (signal) => {
      void graceFullShutDown(signal, server);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

async function graceFullShutDown(signal, server) {
  if (signal.length > 0) console.info(`Received signal ${signal}`);

  console.info("Gracefully shutting down server");

  // server.closeAllConnections()

  try {
    server.close(function (error) {
      if (error != null) {
        console.error("Error", error);
        process.exit(1);
      } else {
        console.info("Server closed successfully", error);
        process.exit(0);
      }
    });
  } catch (error) {
    console.error("Error", error);
    setTimeout(() => process.exit(1), 500);
  }

  //TODO: Disconnect DB
  await disconnectPostgres();
}

void startServer();
