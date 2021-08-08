class Api::DispensariesController < ApplicationController
before_action :require_logged_in, only: [:create]

  def index
    @dispensaries = Dispensary.all
    render :index
  end

  def show
    @dispensary = Dispensary.find(params[:id])
    render :show
  end

  def create
    @dispensary = Dispensary.create!(dispensary_params)
  end

  private

  def dispensary_params
    params.require(:dispensary).permit(:name, :address, :dispensary_type, :url)
  end
end
