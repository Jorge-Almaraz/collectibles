
import React from "react";
import ComicsService from "../services/comicsService";
import CRUD from "../components/CRUD/CRUD";
import Comic from "../models/Comic"

async function fetchComics (state = {}) {
  const response = await ComicsService.getComics()
  return response.data
}

function createComic (comic) {
  if (!comic) throw new Error('Error, no comic received on save function')
  return ComicsService.createComic(comic)
}

function updateComic (comic) {
  if (!comic) throw new Error('Error, no comic received on update function')
  return ComicsService.updateComic(comic.id, comic)
}

async function onDelete (comic) {
  await ComicsService.deleteComic(comic.id)
}

const fields = Comic.getFields()

export default function Users () {
  return (
    <main style={{ padding: "1rem 0" }}>
      <CRUD
        fields={fields}
        entityName={'comic'}
        dataSource={fetchComics}
        onDelete={onDelete}
        onCreate={createComic}
        onUpdate={updateComic}
      />
    </main>
  );
}
