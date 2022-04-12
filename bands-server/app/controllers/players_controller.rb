class PlayersController < ApplicationController

    def index
        players = Player.all
        #render json: PlayerSerializer.new(players)
        render json: players.to_json(only: [:name, :instrument, :band_id])
    end

end
