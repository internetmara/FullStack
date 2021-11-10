class Api::OrdersController < ApplicationController
before_action :require_logged_in, only: [:create]

  def index 
    if current_user 
        orders_found = current_user.orders
    else
        @orders = []
    end 
    if orders_found
      @orders = []
      orders_found.each do |order|
        @order = {}
        @order[:id] = order.id
        @order[:dispo_name] = order.dispensary.name
        @order[:prod_name] = order.product.name
        @order[:prod_size] = order.product.size
        @order[:prod_price] = order.product.price
        @order[:dispo_pic] = order.dispensary.url
        @order[:quantity] = order.quantity
        @order[:prod_pic] = order.product.url
        @order[:dispo_id] = order.dispensary.id
        @order[:prod_id] = order.product.id
        @orders.push(@order)
      end
    end
    render :index
  end

  def show 
    order_selected = Order.find(params[:id])
      @order = {}
      @order[:id] = order_selected.id
      @order[:dispo_name] = order_selected.dispensary.name
      @order[:prod_name] = order_selected.product.name
      @order[:prod_size] = order_selected.product.size
      @order[:prod_price] = order_selected.product.price
      @order[:dispo_pic] = order_selected.dispensary.url
      @order[:quantity] = order_selected.quantity
      @order[:prod_pic] = order_selected.product.url
      @order[:dispo_id] = order_selected.dispensary.id
      @order[:prod_id] = order_selected.product.id
    render :show
  end

  def create 
    @order = Order.new(order_params)
  
    if @order.save 
      new_order = @order
      @order = {}
      @order[:id] = new_order.id
      @order[:dispo_name] = new_order.dispensary.name
      @order[:prod_name] = new_order.product.name
      @order[:prod_size] = new_order.product.size
      @order[:prod_price] = new_order.product.price
      @order[:dispo_pic] = new_order.dispensary.url
      @order[:quantity] = new_order.quantity
      @order[:prod_pic] = new_order.product.url
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