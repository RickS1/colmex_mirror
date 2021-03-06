class CreateCursos < ActiveRecord::Migration
  def change
    create_table :cursos do |t|
      t.text :titulo, null: false
      t.text :descripcion, null: false
      t.date :fecha_inicio_conv
      t.date :fecha_fin_conv
      t.date :fecha_inicio_clases
      t.text :liga, null: false
      t.string :tipo_curso, null: true
      t.string :programa, null: false

      t.timestamps null: false
    end
  end
end
