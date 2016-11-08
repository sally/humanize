module HumanizeService
  include HTTParty

  API_ENDPOINT = "http://humanize-api.herokuapp.com/api/v1"

  def self.get_companies
    url = API_ENDPOINT + "/companies"
    response = HTTParty.get(url)
  end

end
