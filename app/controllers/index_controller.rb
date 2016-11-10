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

  def sessioninfo
    current_date = params[:current_date]

    prev_session = HumanizeHelper.get_prev_session('Dropbox', current_date)
    prev_session_id = prev_session["id"]
    @q_one_before_avg = HumanizeHelper.avg_before_question('Dropbox', prev_session_id, 1)
    @q_two_before_avg = HumanizeHelper.avg_before_question('Dropbox', prev_session_id, 2)
    @q_three_before_avg = HumanizeHelper.avg_before_question('Dropbox', prev_session_id, 3)
    @q_one_after_avg = HumanizeHelper.avg_after_question('Dropbox', prev_session_id, 1)
    @q_two_after_avg = HumanizeHelper.avg_after_question('Dropbox', prev_session_id, 2)
    @q_three_after_avg = HumanizeHelper.avg_after_question('Dropbox', prev_session_id, 3)

    render partial: 'highchart', locals: {
      q_one_before_avg: @q_one_before_avg,
      q_two_before_avg: @q_two_before_avg,
      q_three_before_avg: @q_three_before_avg,
      q_one_after_avg: @q_one_after_avg,
      q_two_after_avg: @q_two_after_avg,
      q_three_after_avg: @q_three_after_avg
    }
  end


end
