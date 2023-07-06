const db = require("@makeitrealcamp/db-mock")

const getProduct = () => {
    const product = db.findAll()

    return product
}

const getProductById = (id) => {
    const product = db.findById(id)

    return product
}

const createProduct = (data) => {
    const product = db.insert(data)

    return product 
};

const updateProduct = (id, data) => {
    const product = db.update({id, ...data})

    return product
}

const deleteProduct = (id) => {
    const product = db.remove(id)

    return product
}


module.exports = {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}