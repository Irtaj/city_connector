Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :companies do
        resources :resources
      end
      resources :users
    end
  end

    resources :companies, only: [:new, :create, :show]
    resources :resources
    resources :users
end
