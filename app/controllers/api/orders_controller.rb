class Api::OrdersController < ApplicationController
before_action :require_logged_in, only: [:create]

  def index 
    if current_user 
        @orders = current_user.orders
    else
        @orders = []
    end 

    render :index
  end

  def show 
    order_selected = Order.find(params[:id])
    @order = {}
    @order['prod_name'] = order_selected.product.name
    @order['dispo_name'] = order_selected.dispensary.name
    @order['quantity'] = order_selected.product.quantity
    render :show
  end

  def create 
    @order = Order.new(order_params)
  
    if @order.save 
        render :show 
    else 
        render json: @order.errors.full_messages, status: 422
    end
  end

  def update
    @order = Order.find_by(id: params[:id])
    if @order.update(order_params)
      render :show
    else 
      render json: @order.errors.full_messages, status: 422
    end
  end

  def destroy
      @order = Order.find_by(id: params[:id])
      @order.destroy 
      render :show 
    end
  
  private

  def order_params
    params.require(:order).permit(:user_id, :dispensary_id, :product_id, :purchase_num, :quantity)
  end

end