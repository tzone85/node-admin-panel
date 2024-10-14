import {Router} from "express";
import {Register} from "./controller/authcontroller";

export const routes = (router: Router) => {
    router.post('/api/register', Register)
    // res.json({ message: 'Registration endpoint' });
}