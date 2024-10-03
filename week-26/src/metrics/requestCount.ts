import { NextFunction, Request, Response } from "express";
import client from "prom-client";

const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"]
});

const activeUserGauge = new client.Gauge({
  name: "active_users",
  help: "Total number of users whose request has not yet resolved",
  labelNames: ["method", "route"]
});

const httpRequestDurationMSHistogram = new client.Histogram({
  name: "http_request_duration_ms",
  help: "Duration of HTTP requests in ms",
  labelNames: ["method", "route", "code"],
  buckets: [0.1, 5, 15, 50, 100, 300, 500, 1000, 3000, 5000], // Define buckets
});

export const requestCountMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();

  activeUserGauge.inc({
    method: req.method,
    route: req.route ? req.route.path : req.path,
  });

  // This code is executed when the response is sent. Prom-client stores it the 
  // data
  res.on("finish", () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Request took ${duration}ms`);

    // Deferring the decrement by 10 seconds so that we can see the number of 
    // active connections in the last 10 seconds
    setTimeout(() => {
      activeUserGauge.dec({
        method: req.method,
        route: req.route ? req.route.path : req.path,
      });
    }, 10000);

    // Setting up histogram data (you specify the time difference manually)
    httpRequestDurationMSHistogram.observe({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      code: res.statusCode,
    }, duration);

    requestCounter.inc({
      method: req.method,
      route: req.route ? req.route.path : req.path,
      status_code: res.statusCode
    });

  });

  next();
}
