import express from 'express';

// import sample from 'server/api/internal/sample';

const router = express.Router();

router.get('/health',(req, res, next) => {
    req.log.info('Internal API');
    res.send('OK');
    next();
  });
  
  /**
   * Internal API
   */
//   router.use('/proxy', proxyAuthMiddleware('protected'), proxyRouter);

export default router;