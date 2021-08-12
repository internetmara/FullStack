json.orders do 
    @orders.each do |order|
        json.set! order.id do 
            json.extract! order, :user_id, :dispensary_id, :product_id, :purchase_num, :quantity
        end
    end
end


json.products do 
    @orders.each do |order|
        json.set! order.product.id do 
            json.extract! order.product, :id, :dispensary_id, :name, :brand, :price, :category, :size, :url
            json.photoUrls order.product.photos.map {|photo| url_for(photo)}
        end
    end
end