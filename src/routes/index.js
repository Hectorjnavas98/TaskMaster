import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'TaskMAster'}))
router.get('/login', (req, res) => res.render('login', { title: 'TaskMAster'}))

export default router