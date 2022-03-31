
const ServiceFactory = require('../services/Factory')

async function getComics (req, res) {
  try {
    const comicsService = await ServiceFactory.getService('comics')
    const comics = await comicsService.listComics()
    res.json(comics)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function createComic (req, res) {
  try {
    const comicsService = await ServiceFactory.getService('comics')
    const comic = await comicsService.createComic(req.body)
    res.json(comic)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function updateComic (req, res) {
  try {
    const { id } = req.params
    const comicsService = await ServiceFactory.getService('comics')
    const comic = await comicsService.updateComic (id, req.body)
    res.json(comic)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function destroyComic (req, res) {
  try {
    const { id } = req.params
    const comicsService = await ServiceFactory.getService('comics')
    const comic = await comicsService.destroyComic(id)
    res.json(comic)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

module.exports = {
  getComics,
  createComic,
  updateComic,
  destroyComic
}
