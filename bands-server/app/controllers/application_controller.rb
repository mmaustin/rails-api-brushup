class ApplicationController < ActionController::API
    include ActionController::Cookies
    skip_before_action :verify_authenticity_token

    def current_user
        #session[:init] = true
        @current_user ||= Admin.find_by(id: session[:admin_id])
        debugger
        #@current_user ||= Admin.find_by(id: 6)
    end

end
