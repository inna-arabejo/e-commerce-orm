const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products and include associated Category and Tag data
  try {
    const allProducts = await Product.findAll({
      include: [{model: Category}, {model: Tag}]
    })
    return res.status(200).json(allProducts);
  } catch (err) {
    return res.status(400).json(err)
  }
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{model: Category}, {model: Tag}],
    })
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json(err)
  }
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body, {
    where: {
      id: req.params.id,
    },
  })
  
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    const productTags = await ProductTag.findAll({ where: { product_id: req.params.id }})
    const productTagIds = await productTags.map(({ tag_id }) => tag_id);
    const newProductTags = req.body.tagIds
      .filter((tag_id) => !productTagIds.includes(tag_id))
      .map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      const updatedProductTags = await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ])
      return res.status(200).json(updatedProductTags)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {
  try {
    const deleteProduct = await Product.destroy({ where: {
      id: req.params.id
    }})
    return res.status(200).json(deleteProduct)
  } catch (err) {
    return res.status(400).json(err)
  }
});

module.exports = router;
