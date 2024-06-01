import { Router } from "express";

const router = Router();

const moduleRoutes = [
    {
        path: '/',
        route: ''
    },
    {
        path: '/',
        route: ''
    },
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});

export default router;