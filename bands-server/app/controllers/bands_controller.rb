class BandsController < ApplicationController

    def index
        bands = Band.all
        render json: bands.to_json(only: [:id, :name], include: {players: {except: [:created_at, :updated_at]}})
    end


end
