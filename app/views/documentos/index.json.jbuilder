json.array!(@documentos) do |documento|
  json.extract! documento, :id, :nombre, :tipo, :anio
  json.url documento_url(documento, format: :json)
end
