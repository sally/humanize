class IndexController < ApplicationController
  def index
  end

  def dashboard

  end

  def survey
    if params[:type] == 'before'
      @form_action = "before"
    elsif params[:type] == 'after'
      @form_action = "after"
    else
      # error msg
      render '404'
    end
  end

  def tips

  end

  def thanks
  end
end
