Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  resources :admins
  resources :users
  resources :players
  resources :bands
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
