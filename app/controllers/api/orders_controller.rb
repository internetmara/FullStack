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
      @order[:id] = order_selected.id
      @order[:prod_name] = order_selected.product.name
      @order[:dispo_name] = order_selected.dispensary.name
      @order[:quantity] = order_selected.quantity
      @order[:url] = order_selected.product.url
      @order[:dispo_id] = order_selected.dispensary.id
      @order[:prod_id] = order_selected.product.id
    render :show
  end

  def create 
    @order = Order.new(order_params)
  
    if @order.save 
      @order = {}
      @order[:id] = new_order.id
      @order[:prod_name] = new_order.product.name
      @order[:dispo_name] = new_order.dispensary.name
      @order[:quantity] = new_order.quantity
      @order[:url] = new_order.product.url
      @order[:dispo_id] = new_order.dispensary.id
      @order[:prod_id] = new_order.product.id
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