class InformacionGeneralController < ApplicationController

  def historia_75_años
  end

  def premios_y_distinciones
    @categorias = Categorium.all
  end

  def documentacion_institucional
    @actas = Documento.where(:tipo => "Junta")
  end

  def actas
    @actas = Documento.where(:tipo => "Junta")
    respond_to do |format|
      format.js
    end
  end

  def informes
    @informes = Documento.where(:tipo => "Informe")
    respond_to do |format|
      format.js
    end
  end

  def estatutos
    @estatutos = Documento.where(:tipo => "Estatuto")
    respond_to do |format|
      format.js
    end
  end

  def historia
    @estatuto_organico = Documento.where("tipo = ? AND nombre LIKE ?","Estatuto","%Orgánico%").first
  end

  def autoridades
    @actas = Documento.where(:tipo => "Junta")
  end

  def profesores_emeritos
    @profesores = Emerito.all
  end

  def sobre_el_colegio
  end

  def transparencia
  end

  def asamblea
    respond_to do |format|
      format.js
    end
  end

  def operativas
    operativos, @operativas = Personal.where(:seccion => "Operativas"), []
    orden, i, j = ["Gabriela Said Reyes", "Valentina Riquelme Molina", "Laura Valverde González", "Quetzalli Padilla Dulché", "José Luis Arciga Torres", "León Ruiz Chávez", "Ernesto Arturo Hernández Camarillo", "Alejandro Castro González"], 0, 0
    while operativos.size > 0 do
      if operativos[i]["nombre"] == orden[j]
        @operativas << operativos[i]
        j = j + 1
        i = 0
      end
      i = i + 1
    end
    respond_to do |format|
      format.js
    end
  end

  def junta
    @juntas = Personal.where(:seccion => "Junta")
    respond_to do |format|
      format.js
    end
  end

  def presidencia
    @presidencias = Personal.where(:seccion => "Presidencia")
    respond_to do |format|
      format.js
    end
  end

  def centros_de_estudio
    @centros = Personal.where(:seccion => "Centros")
    respond_to do |format|
      format.js
    end
  end

  def biblioteca
    @bibliotecas = Personal.where(:seccion => "Biblioteca")
    respond_to do |format|
      format.js
    end
  end

  def administracion
    @admins = Personal.where(:seccion => "Administración")
    respond_to do |format|
      format.js
    end
  end
end
