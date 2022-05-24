class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        #session[:init] = true
        @current_user ||= Admin.find_by(id: session[:session_id])
        #debugger
        #@current_user ||= Admin.find_by(id: 6)
    end

end
