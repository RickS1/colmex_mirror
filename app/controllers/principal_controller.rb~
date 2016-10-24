class PrincipalController < ApplicationController
  def principal
    #begin
      cliente = TinyTds::Client.new username: 'agendaPRED', password: '@g3NDa#', host: '172.16.33.5', port: '1433'
      @resultado = cliente.execute("USE Agenda")
      @resultado.do
      @resultado = cliente.execute("SELECT * FROM dbo.vw_DatosAgenda WHERE DATEADD(day, DATEDIFF(day,'19000101',PARSE(fechaFin AS DATE USING 'es-ES')), CAST(horaFin AS DATETIME2(1))) >= CAST(GETDATE() AS DATETIME2(1))  ORDER BY PARSE(fechaInicio AS DATE USING 'es-ES') ASC, horaInicio ASC
")
      gon.ev_big, gon.ev_small, gon.ev_tiny = construye_slider_eventos(@resultado)
    #rescue
    #  gon.ev_big, gon.ev_small, gon.ev_tiny = "", "" ,""
    #end
    @sliders = Slider.where("liga LIKE ? ", "%youtu%").union(Slider.where.not("liga LIKE ? ", "%youtu%").order("RAND()"))
    @descubre = Descubre.where("fecha_publicacion <= ? AND fecha_limite_pub > ?", Date.current(), Date.current()).order("RAND()")
    @frase = Frase.order("RAND()").first
    gon.descubres = @descubre.to_json
    gon.cant_sliders = @sliders.size
  end

  def resultados_busqueda
    @resultados = []
		begin
      cliente = TinyTds::Client.new username: 'agendaPRED', password: '@g3NDa#', host: '172.16.40.214', port: '49767'
      @eventos = cliente.execute("USE Agenda")
      @eventos.do
      @eventos = cliente.execute("SELECT * FROM dbo.vw_DatosAgenda WHERE DATEADD(day, DATEDIFF(day,'19000101',PARSE(fechaFin AS DATE USING 'es-ES')), CAST(horaFin AS DATETIME2(1))) >= CAST(GETDATE() AS DATETIME2(1)) ORDER BY PARSE(fechaInicio AS DATE USING 'es-ES') ASC, horaInicio ASC
")
		rescue
			@eventos = []
		end
    condicion_limpia = quitar_acentos(params[:condicion]).downcase
    Descubre.where("fecha_publicacion <= ? AND fecha_limite_pub > ?", Date.current(), Date.current()).each do |d|
      if (quitar_acentos(d.titulo.to_s.downcase).include?(condicion_limpia) or quitar_acentos(d.contenido.to_s.downcase).include?(condicion_limpia) or quitar_acentos(d.tags.to_s.downcase).gsub(/ *, */, " ").include?(condicion_limpia)) and not @resultados.include?(d)
        @resultados << d
      end
    end
    Curso.all.each do |c|
      if (quitar_acentos(c.titulo.to_s.downcase).include?(condicion_limpia) or quitar_acentos(c.descripcion.to_s.downcase).include?(condicion_limpia) or quitar_acentos(c.programa.to_s.downcase).include?(condicion_limpia) or (quitar_acentos(c.programa.to_s).downcase == "curso" and quitar_acentos(c.tipo_curso.to_s).downcase.include?(condicion_limpia)) or quitar_acentos(c.tags.to_s.downcase).gsub(/ *, */, " ").include?(condicion_limpia)) and not @resultados.include?(c)
        @resultados << c
      end
    end
    @eventos.each do |e|
      if (quitar_acentos(e["tituloActividad"].to_s).downcase.include?(condicion_limpia) or quitar_acentos(e["subtituloActividad"].to_s).downcase.include?(condicion_limpia) or quitar_acentos(e["tipoActividad"].to_s).downcase.include?(condicion_limpia) or quitar_acentos(e["sede"].to_s).downcase.include?(condicion_limpia) or quitar_acentos(e["institucionSede"].to_s).downcase.include?(condicion_limpia) or quitar_acentos(e["centroSiglas"].to_s).downcase.include?(condicion_limpia)) and not @resultados.include?(e)
        @resultados << e
      end
    end
  end

  def quitar_acentos(cadena)
    if cadena.to_s == ""
      return ""
    end
    nueva_cad = cadena.gsub(/[áÁ]/, "a")
    nueva_cad = nueva_cad.gsub(/[éÉ]/, "e")
    nueva_cad = nueva_cad.gsub(/[íÍ]/, "i")
    nueva_cad = nueva_cad.gsub(/[óÓ]/, "o")
    nueva_cad = nueva_cad.gsub(/[úÚüÜ]/, "u")
    return nueva_cad
  end

  def como_llegar
  end

  def principios_eticos
  end

  def sitemap
  end

  def aviso_de_privacidad
  end

  def proximamente
  end
end
