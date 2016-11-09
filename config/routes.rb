Rails.application.routes.draw do
  root 'index#index'

  scope '/shippo' do
    get '/', :to => 'index#dashboard'
    get '/survey', :to => 'index#survey'
  end

  get '/tips', :to => 'index#tips'
  get '/thankyou', :to => 'index#thankyou'

  get '/form', :to => 'index#form'
end
