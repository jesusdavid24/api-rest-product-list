const router = require('express').Router();
const {
    handleUpdateProduct,
    handleDeleteProduct,
    handleGetAllProducts,
    handleGetProductsById,
    handlePostProducts
} = require('../handlers/product')

router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductsById);
router.post('/createProduct', handlePostProducts);
router.put('/updateProduct/:id', handleUpdateProduct);
router.delete('/deleteProduct/:id', handleDeleteProduct);

module.exports = router;

