class BandsController < ApplicationController
    before_action :set_band, only: [:show, :update, :destroy]

    def index
        bands = Band.all
        render json: BandSerializer.new(bands, {include: [:players]})
    end

    def show
        #band = Band.find(params[:id])
        render json: @band
    end

    private

    def set_band
        @band = Band.find(params[:id])
    end

    def band_params
        params.require(:band).permit(:name)
    end

end
