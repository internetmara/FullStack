class ChangeOrders < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :purchase_num
    add_column :orders, :purchase_num, :string
  end
end
