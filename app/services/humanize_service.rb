module HumanizeService
  include HTTParty

  # Note: All inputs are case sensitive

  API_ENDPOINT = "http://humanize-api.herokuapp.com/api/v1"

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

  # Helper function to get company id given its name
  def self.get_company_id(name)
    get_company(name)["data"]["id"]
  end

  # Method to get sessions by company
  def self.get_sessions(company_name)
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions"
    response = HTTParty.get(url)
  end

  # Overarching method to return all responders given a company name and session id
  # Can also filter responders by attributes: before, age_group, gender, position
  # Age groups are 1: 18-25, 2: 26-40, 3: 41-65, 4: 65+
  # Positions are C-Level, Senior, Manager, Junior
  def self.get_session_responders(company_name, session_id, args = {})
    company_id = get_company_id(company_name)
    url = API_ENDPOINT + "/companies/#{company_id}/sessions/#{session_id}/responders"

    if args.empty?
      response = HTTParty.get(url)
    else
      url += "?"
      args.keys.each_with_index do |attr, i|
        url += attr.to_s + "=" + args.values[i].to_s + "&"
        p url
      end
      response = HTTParty.get(url)
    end
  end
end
