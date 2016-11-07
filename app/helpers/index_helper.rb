module IndexHelper
  def pre?(form_id)
    if @form_id == "before-survey-form"
      true
    else
      false
    end
  end
end
