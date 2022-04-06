class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players.to_json(except: [:created_at, :updated_at])
    end

end
