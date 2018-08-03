require 'creek'
require 'axlsx'
require 'axlsx_rails'
require 'rubygems'
require 'fileutils'


class Export

def initialize(mapping)
    #Parse doc incoming
    $file_name = mapping[1].to_s
    $file_name = $file_name.gsub(" ", "_")
    $file_name = $file_name.gsub("(", "")
    $file_name = $file_name.gsub(")", "")
    cworkbook = Creek::Book.new mapping[0]
    cworksheets = cworkbook.sheets
    
    
    
    
    
    def makeExport(verbatim_data, graph_data, segment_data, mindset_columns, mindset_types, mindset_titles)
        #verbatim - 9 per row
        #graph - 7 per row
        #segments - 1 per row
        #Mindset columns - 1
        #types - 1
        #titles - 1
        p = Axlsx::Package.new
        wb = p.workbook
        worksheet_name = $file_name.truncate(30)
        wb.add_worksheet(:name=> "#{worksheet_name}") do |sheet|
            
            sheet.add_row []
            sheet.add_row []
            
            sheet.add_row ["Segments"]
            sheet.add_row segment_data
            
            sheet.add_row []
            sheet.add_row []
            
            sheet.add_row ["Mindsets"]
            sheet.add_row ["Mindset Title","Type","Column"]
            
            
            mindset_count = mindset_titles.size
            i = 0
            mindset_titles.each do |mindset|
                
                sheet.add_row [mindset_titles[i], mindset_types[i], mindset_columns[i]]
                i += 1
            end
            
            sheet.add_row []
            sheet.add_row []
           sheet.add_row ["Verbatim Data"]
           sheet.add_row ["Topic Code","Type","Survey Column", "Topic Title", "Topic Frame of Reference", "# of Ranking evaluations", "# of Ranking Statements Shown", "Mindset Y/N"]
           verbatim_data.each do |row|
            sheet.add_row row
           
           end
           
           sheet.add_row []
           
           sheet.add_row ["Graph Data"]
           sheet.add_row ["Graph Code","Graph Type","Topics", "Graph Title"]
           graph_data.each do |row|
               sheet.add_row row
               
           end
           
           
           
            
            
            
            
        end # end worksheet do
    
    p.serialize($file_name)
    file = $file_name.to_s
    FileUtils.mv $file_name, "./public/uploads/#{$file_name}/inputs_#{$file_name}"
    
    
    end # End make export
    
    
    
    
    
    
    
end



end