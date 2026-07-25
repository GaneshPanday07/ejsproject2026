const { validationResult } = require("express-validator");

const validationMiddleware = (viewName) => {
    return (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            if (viewName === "editStudent") {
                return res.render("editStudent", {
                    student: {
                        ...req.body,
                        _id: req.params.id
                    },
                    errors: errors.mapped(),
                    oldData: req.body
                });
            }
            return res.render(viewName, {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        next();
    };
};

module.exports = validationMiddleware;