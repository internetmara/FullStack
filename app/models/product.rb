class Product < ApplicationRecord
  has_one_attached :photo

  has_many :orders,
    foreign_key: :product_id,
    class_name: :Order
end
