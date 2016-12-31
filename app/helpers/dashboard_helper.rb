module DashboardHelper

  def date_parser(date)
    month, day, year = date.match(/(\d+)\/(\d+)\/(\d+)/).captures
    return "#{month} / #{day} / #{year}"
  end
  
end
