exports.getUsers = async (req, res, next) => {
    try {
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