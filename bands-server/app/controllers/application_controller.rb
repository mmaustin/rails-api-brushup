class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        @current_user ||= Admin.find_by_id(session[:admin_id])
        puts session.keys
        #@current_user ||= Admin.find_by(id: 6)
    end

end
