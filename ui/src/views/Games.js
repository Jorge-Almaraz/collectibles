
import React from "react";
import GamesService from "../services/gamesService";
import CRUD from "../components/CRUD/CRUD";
import Game from "../models/Game";

async function fetchGames (state = {}) {
    const response = await GamesService.getGames()
    return response.data
}

function createGame (game) {
    if (!game) throw new Error ('Error, no game received on save function')
    return GamesService.createGame(game)    
}

function updateGame (game) {
    if (!game) throw new Error ('Error, no game received on save function')
    return GamesService.updateGame(game)
}

async function onDelete (game) {
    await GamesService.deleteGame(game.id)
}

const fields = Game.getFields()

export default function Users () {
    return (
        <main style={{ padding: "1rem 0" }}>
            <CRUD
            fields={fields}
            entityName={'game'}
            dataSource={fetchGames}
            onDelete={onDelete}
            onCreate={createGame}
            onUpdate={updateGame}
            />
        </main>
    );
}

