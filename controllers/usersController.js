const data = [
    {
        id: 1,
        fullName: 'Jack Kelvin',
        email: 'jack@gmail.com'
    },
    {
        id: 2,
        fullName: 'Mark Cook',
        email: 'mark@gmail.com'
    },
    {
        id: 3,
        fullName: 'David Calvin',
        email: 'david@gmail.com'
    }
];

exports.getUsers = async (req, res, next) => {
    try { 
        res.json({
            data: data,
            code: 1007,
            success: true,
            message: ''
        });
    } catch(err) {
        res.json({
            code: 1006,
            error: true,
            message: err.message
        });
    }
};

exports.postUser = async (req, res, next) => {
    try {
        await data.push(req.body);
        res.json({
            data: req.body,
            code: 1007,
            success: true,
            message: 'User details saved successfully'
        });
    } catch(err) {
        res.json({
            code: 1006,
            error: true,
            message: err.message
        });
    }
};