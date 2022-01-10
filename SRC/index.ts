
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import cors from "cors";
import { MainApi } from "./Routes";
import * as http from "http";
const health = require('@cloudnative/health-connect');
let healthcheck = new health.HealthChecker();
let server: http.Server | null = null;
const PORT = process.env.PORT || 1000;
function initApplication(): express.Application {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/TESTAPI', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
    });
    const app = express();
    app.use(express.json());
    app.use(morgan("tiny"));
    app.use(express.static("public"));
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    }));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(MainApi);
    app.use(
        (err: any, req: Request, res: Response, next: NextFunction) => {
            res.locals.message = err.message;
            const status = err.statusCode || 500;
            res.locals.status = status;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            res.status(status);
            return res.json({
                error: {
                    message: err.message
                }
            });
        }
    );
    app.use('/health', health.LivenessEndpoint(healthcheck))
    app.use('/ready', health.ReadinessEndpoint(healthcheck));
    return app;
}
function start() {
    const app = initApplication();

    server = app.listen(process.env.PORT || PORT, () => {
        console.log(`Server started on PORT:` + PORT);
    });
}
// Start the application
start();