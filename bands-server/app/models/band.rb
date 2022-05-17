class Band < ApplicationRecord
    has_many :players
    belongs_to :admin
end
