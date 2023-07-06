const { 
    createProduct, 
    getProduct,
    getProductById, 
    updateProduct,
    deleteProduct
} = require("../models/product")

exports.handleGetAllProducts = (req, res) => {
    try {
        const data = getProduct();
        res.status(201).json({ data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.handleGetProductsById = (req, res) => {
    try {
        const { id } = req.params;
        const data = getProductById(id);
        res.status(201).json({ data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.handlePostProducts = (req, res) => {
    try {
        const { productName, color, category, price } = req.body;
        
        if (!( productName && color && category && price )) {
            return res.status(400).json({ message: 'Faltan algunos campos' })
        }

        const data = createProduct({productName, color, category, price})

        res.status(201).json({ data })
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

exports.handleUpdateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const data = updateProduct(id, body )

        res.status(200).json({ data })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.handleDeleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        
        const data = deleteProduct(id)

        res.status(201).json({ data })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}