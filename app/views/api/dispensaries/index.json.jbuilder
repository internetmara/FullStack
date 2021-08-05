json.array! @dispensaries do |dispensary|
  json.partial! 'api/dispensaries/dispensary', dispensary: dispensary
end

