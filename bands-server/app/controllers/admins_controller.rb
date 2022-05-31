class AdminsController < ApplicationController

    before_action :set_admin, only: [:update, :destroy]

    def index
        admins = Admin.all
        render json: admins.to_json(only: [:id, :username, :email])
    end

    def show
        if current_user
        #render json: @admin.to_json(only: [:id, :username, :email]) #, :include => {:players => {only: [:name, :instrument, :band_id]}})
            #render json: @current_user.to_json(only: [:id, :username, :email])
            render json: current_user, status: :ok
            #debugger
            #render json: @admin, status: ok
            #render "Your account doesn't exist."
            #render json: current_user, status: :ok
        else
            #render "No current session stored", status: :unauthorized
            #render "Your account doesn't exist."
            @admin = Admin.find_by(id: 1)
            render json: @admin
        end
    end

    def create
        @admin = Admin.create(admin_params)
    
        if @admin.valid?
            session[:admin_id] = @admin.id
            puts session[:session_id]
          render json: @admin, status: :ok
          #debugger
        else
          render json: @admin.errors.full_messages, status: :unprocessable_entity
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
