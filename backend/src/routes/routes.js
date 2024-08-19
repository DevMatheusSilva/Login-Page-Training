import express from 'express';

const routes = (app) => {
    app.route("/").get((_, res) => res.json({ message: "Hello World!" }));
    app.use(express.json());
}

export default routes;
