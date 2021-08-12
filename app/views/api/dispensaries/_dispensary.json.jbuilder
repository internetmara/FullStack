  json.extract! dispensary, :id, :name, :address, :dispensary_type, :url
  json.photoUrl url_for(dispensary.photo)