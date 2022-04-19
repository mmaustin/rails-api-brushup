class PlayersController < ApplicationController

    def index
        players = Player.all
        #render json: PlayerSerializer.new(players)
        render json: players.to_json(only: [:name, :instrument, :band_id])
    end

    def create
        @player = Player.new(player_params)
    
        if @player.save
          render json: @player, status: :created, location: @player
        else
          render json: @player.errors, status: :unprocessable_entity
        end
    end

    private

    def set_player
        @player = Player.find(params[:id])
    end

    def player_params
        params.require(:player).permit(:name, :instrument, :band_id)
    end

end
