module HumanizeService
  include HTTParty

  # API_ENDPOINT = "http://humanize-api.herokuapp.com/api/v1"

  API_ENDPOINT = "http://localhost:3000/api/v1"

  # Method to get all companies
  def self.get_companies
    url = API_ENDPOINT + "/companies"
    response = HTTParty.get(url)
  end

  # Method to get company by name
  def self.get_company(name)
    url = API_ENDPOINT + "/companies?name=#{name}"
    response = HTTParty.get(url)
  end

  def self.get_company_id(name)
    get_company(name)["data"]["id"]
  end

  # Method to get sessions by company
  def self.get_sessions(company_name)
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions"
    response = HTTParty.get(url)
  end

  # Method to get responders by session
  def self.get_session_responders(company_name, session_id)
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions/#{session_id}/responders"
    response = HTTParty.get(url)
  end

  # Method to get before-responders by sessions
  def self.get_session_responders_before(company_name, session_id)
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions/#{session_id}/responders?before=true"
    response = HTTParty.get(url)
  end

  # Method to get after-responders by sessions
  def self.get_session_responders_after(company_name, session_id)
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions/#{session_id}/responders?before=false"
    response = HTTParty.get(url)
  end
end
