const User = require('../model/user-model')


const getUserInfo = async (req, res) => {
    const user = await User.find({})
    res.send(user)
}



const createUser = async (req, res) => {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,

    })

    res.send(user)
}


const updateUserInfo = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            new: true,
        })

        res.send(user)
    }
    catch (err) {
        console.log(err.message)
    }


}

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: "user deleted successfully" })
}


module.exports = {
    getUserInfo,
    updateUserInfo,
    createUser,
    deleteUser

}