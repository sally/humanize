class IndexController < ApplicationController
  def index
  end

  def dashboard

  end

  def survey
    if params[:type] == 'before'
      @form_id = "before-survey-form"
    elsif params[:type] == 'after'
      @form_id = "after-survey-form"
    else
      # error msg
      render "layouts/404"
    end
  end

  def tips

  end

  def thankyou

  end

  def form
    if params[:type] == 'before'
      @form_id = "before-survey-form"
    elsif params[:type] == 'after'
      @form_id = "after-survey-form"
    else
      # error msg
      render "layouts/404"
    end
  end
end
