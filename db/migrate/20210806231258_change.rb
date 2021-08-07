class Change < ActiveRecord::Migration[5.2]
  def change
    add_column :dispensaries, :url, :string
  end
end
