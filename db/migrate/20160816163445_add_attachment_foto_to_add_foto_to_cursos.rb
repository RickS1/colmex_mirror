class AddAttachmentFotoToAddFotoToCursos < ActiveRecord::Migration
  def self.up
    change_table :cursos do |t|
      t.attachment :foto
    end
  end

  def self.down
    remove_attachment :cursos, :foto
  end
end
