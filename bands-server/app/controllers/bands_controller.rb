class BandsController < ApplicationController

    def index
        bands = Band.all
        render json: BandSerializer.new(bands)
    end


end
