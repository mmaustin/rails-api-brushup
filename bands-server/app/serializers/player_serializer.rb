class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :instrument, :band_id
  belongs_to :band
end
