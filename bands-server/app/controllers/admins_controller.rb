class AdminsController < ApplicationController

    def index
        admins = Admin.all
        render json: admins.to_json(only: [:id, :username, :email])
    end

end
