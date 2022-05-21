class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        User.find_by(id: session[:admin_id])
    end

end
