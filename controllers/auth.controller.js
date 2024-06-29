import { register as register_service } from "../services/auth.services.js"
import { constants } from "../services/utils/constants.js"

const { status, message} = constants.response


const register = async (req, res) => {
    const user_db = await register_service(req.body)
    res.status(status.OK).json(user_db)
}


const login = (req, res) => {
    
}

export {
    register,
    login
}