json.dispensary do
  json.extract! @dispensary, :id, :name, :address, :dispensary_type, :url
  json.photoUrl url_for(@dispensary.photo)
end

json.products do 
  json.array! @dispensary.products do |product|
    json.partial! 'api/products/product', product: product
  end
end

