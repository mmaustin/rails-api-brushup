class BandsController < ApplicationController

    def index
        bands = Band.all
        render json: bands.to_json(only: [:id, :name], include: [:players])
    end

end
