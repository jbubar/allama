json.sections do 
    if sections
        sections.each do |section|
            json.set! section.id do
                json.partial! 'api/sections/section', section: section
            end
        end
    end
end