Rails.application.routes.draw do
  root 'index#index'

  scope '/dropbox' do
    get '/', :to => 'index#dashboard'
    get '/survey', :to => 'index#survey'
  end

  get '/tips', :to => 'index#tips'
  get '/thankyou', :to => 'index#thankyou'

  get '/sessioninfo', :to => 'index#sessioninfo'
  get '/sessionheader', :to => 'index#sessionheader'
  post '/filterdata', :to => 'index#filterdata'
end
