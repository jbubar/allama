Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:show]
    resources :projects, only: [:show, :create, :update, :destroy]
    resources :sections, only: [:show, :create, :update, :destroy]
    resources :tasks, only: [:show, :create, :update, :destroy]
  end
  get '/api/search/:query', to: 'api/search#index', as: :api_search

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  match '*path', to: 'static_pages#root', via: [:get]

  root 'static_pages#root'
end
