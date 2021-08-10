json.dispensary do
  json.extract! @dispensary, :id, :name, :address, :dispensary_type, :url
end

json.products do 
  json.array! @dispensary.products do |product|
    json.partial! 'api/products/product', product: product
  end
end