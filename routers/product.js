const router = require('express').Router();
const {
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetAllProducts,
    handleGetProductsById,
    handlePostProducts,
    healthCheck
} = require('../handlers/product')

router.get('/healthcheck', healthCheck)
router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductsById);
router.post('/createProduct', handlePostProducts);
router.put('/updateProduct/:id', handleUpdateProduct);
router.delete('/deleteProduct/:id', handleDeleteProduct);

module.exports = router;

