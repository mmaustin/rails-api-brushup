class BandSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :players
end
