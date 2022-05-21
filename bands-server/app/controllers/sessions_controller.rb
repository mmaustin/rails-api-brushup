class SessionsController < ApplicationController
  def create
    admin = Admin.find_by(username: params[:username])
    if admin&.authenticate(params[:password])
      session[:admin_id] = admin.id
      render json: admin, status: :ok
    else
      render json: "Invalid Credentials", status: :unauthorized
    end    
  end

  def destroy
    def destroy
      session.delete :admin_id
    end
  end
end
