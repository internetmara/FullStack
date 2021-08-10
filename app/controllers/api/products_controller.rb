class Api::ProductsController < ApplicationController
before_action :require_logged_in, only: [:create]

  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def create
    @product = Product.create!(product_params)
  end

  private

  def product_params
    params.require(:product).permit(:dispensary_id, :name, :brand, :price, :category, :size, :url)
  end
end