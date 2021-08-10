Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:new, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :dispensaries, only: [:index, :show, :create]
    resources :products, only: [:index, :show, :create]
    resources :orders, only: [:index, :show, :create]
  end

    root "static_pages#root"
end
