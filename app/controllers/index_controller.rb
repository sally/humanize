class IndexController < ApplicationController

  # controller action to display main page
  def index

  end

  # controller action to display dashboard for sample data for Bloopr
  def dashboard

  end

  # controller action to display survey for  company employee
  # before takes user to "pre-survey" before Humanize EE session
  # after takes user to "post-survey" after Humanize EE session
  def survey
    if params[:type] == 'before'
      @form_id = "before-survey-form"
    elsif params[:type] == 'after'
      @form_id = "after-survey-form"
    end
  end

  # dashboard action to take user to tips page upon completing pre-survey
  def tips
    if request.xhr?
      render layout: false
    end
  end

  # dashboard action to take user to thank you page upon completing post-survey
  def thankyou

  end

  # controller action to return session info to feed into dashboard main chart
  # get all before and after averages to visualize via bar charts
  def sessioninfo
    current_date = params[:current_date]

    prev_session = HumanizeHelper.get_prev_session('Bloopr', current_date)
    prev_session_id = prev_session["id"]
    @q_one_before_avg   = HumanizeHelper.avg_before_question('Bloopr', prev_session_id, 1)
    @q_two_before_avg   = HumanizeHelper.avg_before_question('Bloopr', prev_session_id, 2)
    @q_three_before_avg = HumanizeHelper.avg_before_question('Bloopr', prev_session_id, 3)
    @q_one_after_avg    = HumanizeHelper.avg_after_question( 'Bloopr', prev_session_id, 1)
    @q_two_after_avg    = HumanizeHelper.avg_after_question( 'Bloopr', prev_session_id, 2)
    @q_three_after_avg  = HumanizeHelper.avg_after_question( 'Bloopr', prev_session_id, 3)

    render partial: 'highchart', locals: {
      q_one_before_avg:   @q_one_before_avg,
      q_two_before_avg:   @q_two_before_avg,
      q_three_before_avg: @q_three_before_avg,
      q_one_after_avg:    @q_one_after_avg,
      q_two_after_avg:    @q_two_after_avg,
      q_three_after_avg:  @q_three_after_avg
    }
  end

  # controller action to retrieve session title and date to feed into dashboard
  # get previous session and its date to display into dashboard headers
  def sessionheader
    current_date = params[:current_date]

    prev_session = HumanizeHelper.get_prev_session('Bloopr', current_date)

    topic = prev_session['topic']
    date  = prev_session['date']

    render text: topic + "&" + date
  end

  # controller action to retrieve filtered data to feed into dashboard main chart
  def filterdata
    @q_one_before_avg   = HumanizeHelper.avg_before_question('Bloopr', 4, 1, params)
    @q_two_before_avg   = HumanizeHelper.avg_before_question('Bloopr', 4, 2, params)
    @q_three_before_avg = HumanizeHelper.avg_before_question('Bloopr', 4, 3, params)
    @q_one_after_avg    = HumanizeHelper.avg_after_question( 'Bloopr', 4, 1, params)
    @q_two_after_avg    = HumanizeHelper.avg_after_question( 'Bloopr', 4, 2, params)
    @q_three_after_avg  = HumanizeHelper.avg_after_question( 'Bloopr', 4, 3, params)

    render partial: 'highchart', locals: {
      q_one_before_avg:   @q_one_before_avg,
      q_two_before_avg:   @q_two_before_avg,
      q_three_before_avg: @q_three_before_avg,
      q_one_after_avg:    @q_one_after_avg,
      q_two_after_avg:    @q_two_after_avg,
      q_three_after_avg:  @q_three_after_avg
    }
  end

end
