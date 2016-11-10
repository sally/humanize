module HumanizeHelper

  def self.latest_session_id(company_name)
    HumanizeService.get_sessions(company_name)['data'].last['id']
  end

  def self.latest_session_topic(company_name)
    HumanizeService.get_sessions(company_name)['data'].last['topic']
  end

  def self.latest_session_date(company_name)
    date = HumanizeService.get_sessions(company_name)['data'].last['date']
    date = date[5..6] + "-" + date[8..9] + "-" + date[0..3]
  end

  def self.avg_before_value(company_name, session_id)
    values = HumanizeService.get_session_responders(company_name, session_id, {before: true})['data'].map{|responder| responder['responses']}.flatten.map{|response| response['value']}

    sum = values.reduce(:+)

    (sum / values.length.to_f).round(1)
  end

  def self.avg_after_value(company_name, session_id)
    values = HumanizeService.get_session_responders(company_name, session_id, {before: false})['data'].map{|responder| responder['responses']}.flatten.map{|response| response['value']}

    sum = values.reduce(:+)

    (sum / values.length.to_f).round(1)
  end

  def self.avg_before_question(company_name, session_id, question_id)
    values = HumanizeService.get_session_responders(company_name, session_id, {before: true})['data'].map{|responder| responder['responses']}.flatten.select{|response| response['question_id'] == question_id}.map{|response| response['value']}

    sum = values.reduce(:+)

    (sum / values.length.to_f).round(1)
  end

  def self.avg_after_question(company_name, session_id, question_id)
    values = HumanizeService.get_session_responders(company_name, session_id, {before: false})['data'].map{|responder| responder['responses']}.flatten.select{|response| response['question_id'] == question_id}.map{|response| response['value']}

    sum = values.reduce(:+)

    (sum / values.length.to_f).round(1)
  end
  
end
