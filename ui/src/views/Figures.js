
import React from "react";
import FiguresService from "../services/figuresService";
import CRUD from "../components/CRUD/CRUD";
import Figure from "../models/Figure"

async function fetchFigures (state = {}) {
    const response = await FiguresService.getFigures()
    return response.data
}

function createFigure (figure) {
    if (!figure) throw new Error (' Error, no figure recieved on save function')
    return FiguresService.createFigure(figure)
}

function updateFigure (figure) {
    if (!figure) throw new Error (' Error, no figure recieved on save function')
    return FiguresService.updateFigure(figure.id, figure)
}

async function onDelete (figure) {
    await FiguresService.deleteFigure(figure.id)    
}

const fields = Figure.getFields()

export default function Users () {
    return (
      <main style={{ padding: "1rem 0" }}>
        <CRUD
          fields={fields}
          entityName={'figure'}
          dataSource={fetchFigures}
          onDelete={onDelete}
          onCreate={createFigure}
          onUpdate={updateFigure}
        />
      </main>
    );
  }
  