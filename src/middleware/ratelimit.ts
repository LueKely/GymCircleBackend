import rateLimit from 'express-rate-limit';

const limitRate = rateLimit({
	windowMs: 60000, // 1 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default limitRate;
