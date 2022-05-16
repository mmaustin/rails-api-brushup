class User < ApplicationRecord
    has_secure_password
    #this would normally have associations (has_many :bands), but I'm not doing that in this repo
end
