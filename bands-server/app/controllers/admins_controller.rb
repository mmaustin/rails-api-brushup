class AdminsController < ApplicationController

    before_action :set_admin, only: [:show, :update, :destroy]

    def index
        admins = Admin.all
        render json: admins.to_json(only: [:id, :username, :email])
    end

    def show
        #band = Band.find(params[:id])
        render json: @admin.to_json(only: [:id, :username, :email]) #, :include => {:players => {only: [:name, :instrument, :band_id]}})
    end

    def create
        @admin = Admin.new(admin_params)
    
        if @admin.save
          render json: @admin, status: :created, location: @admin
        else
          render json: @admin.errors, status: :unprocessable_entity
        end
    end

    def update
        @admin.update(admin_params)
        render json: @admin
    end

    def destroy
        @admin.destroy
    end   

    private

    def set_admin
        @admin = Admin.find(params[:id])
    end

    def admin_params
        params.require(:admin).permit(:username, :email, :password, :password_confirmation)
    end

end
