class Api::OrdersController < ApplicationController
before_action :require_logged_in, only: [:create]

  def show
    @dispensary = Order.find(params[:id])
    render :show
  end

  def create
    @dispensary = Order.create!(order_params)
  end

  def update
  end

  def destroy
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :dispensary_id, :product_id, :purchase_num, :quantity)
  end

end
