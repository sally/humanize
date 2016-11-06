Rails.application.routes.draw do
  root 'index#index'

  scope '/shippo' do
    get '/survey', :to => 'index#survey'
  end
end
