json.extract! product, :id, :dispensary_id, :name, :brand, :price, :category, :size, :url
  json.photoUrl url_for(product.photo)