const {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../models/product");

exports.healthCheck = (req, res) => {
    res.status(200).send("Api runing");
};

exports.handleGetAllProducts = (req, res) => {
    try {
        const data = getProduct();

        res.status(200).json(data);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.handleGetProductsById = (req, res) => {
   try {
        const { id } = req.params;
        const data = getProductById(id);

        res.status(200).json(data);

   } catch (error) {
        res.status(400).json({ message: error.message });
   }    
};

exports.handlePostProducts = (req, res) => {
    try {
        const { product_name, color, category, price } = req.body;

        if (!(product_name && color && category && price)) {
            return res.status(400).json({ message: "Some fields are missing to fill out" });
        }

        const data = createProduct({ product_name, color, category, price });

        res.status(201).json(data);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.handleUpdateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const { product_name, color, category, price } = req.body;

        const data = updateProduct(id, { product_name, color, category, price });

        res.status(200).json(data);

    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};

exports.handleDeleteProduct = (req, res) => {
    try {
        const { id } = req.params;

        const data = deleteProduct(id);

        res.status(201).json({ data });

    } catch (error) {
    res.status(400).json({ message: error.message });
    }
};
