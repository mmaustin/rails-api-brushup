class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        Admin.find_by(id: session[:admin_id])
    end

end
