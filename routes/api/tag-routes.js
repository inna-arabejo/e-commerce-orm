const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // All tags and associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{model: Product}]
    })
    return res.status(200).json(allTags);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id` and include associate Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    return res.status(200).json(tag);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    })
    return res.status(200).json(newTag);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, 
      { where: { id: req.params.id }
    })
    return res.status(200).json(updatedTag);
  } catch (err) {
    return res.status(400).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy( 
      { where: { id: req.params.id }
    })
    return res.status(200).json(deleteTag);
  } catch (err) {
    return res.status(400).json(err)
  }
});

module.exports = router;
