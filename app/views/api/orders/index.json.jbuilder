json.orders do 
    @orders.each do |order|
        # json.set! order.id do 
            json.extract! order, :dispo_id, :prod_id, :quantity, :id, :prod_pic, :dispo_pic, :dispo_name, :prod_name
        # end
    end
end


# json.products do 
#     @orders.each do |order|
#         json.set! order.product.id do 
#             json.extract! order.product, :id, :dispensary_id, :name, :brand, :price, :category, :size, :url
#             json.photoUrl url_for(order.product.photo)
#         end
#     end
# end