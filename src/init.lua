local RunService = game:GetService("RunService")
local module = {}

function module:initaliseClient()
    if (RunService:IsClient()) then
        return require(script.client)
    else
        error("Cannot run initialiseClient() for character-realism on the server!")
    end
end

function module:initaliseServer()
    if (RunService:IsServer()) then
        require(script.server)
    else
        error("Cannot run initialiseServer() for character-realism on the client!")
    end
end

return module
