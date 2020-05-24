export default function validateSignup(values) {
    let errors = {};

    //Name Errors
    if (!values.name) {
        errors.name = "A username is required.";
    }
    // Email Errors
    if (!values.email) {
        errors.email = "Your email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Your email is invalid.";
    }
    // Password Errors
    if (!values.password) {
        errors.password = "A password is required.";
    } else if (values.password.length < 6) {
        errors.password = "Your password must be at least 6 characters.";
    }

    // treesPlanted Errors
    // if (!values.treesPlanted) {
    //     errors.treesPlanted = "A description is required.";
    // } else if (values.treesPlanted.length > 10) {
    //     errors.treesPlanted = "Enter Proper Numbers";
    // }

    // // treesSaved Errors
    // if (!values.treesSaved) {
    //     errors.treesSaved = "A description is required.";
    // } else if (values.treesSaved.length > 10) {
    //     errors.treesSaved = "Enter Proper Numbers";
    // }

    // // treesCut Errors
    // if (!values.treesCut) {
    //     errors.treesCut = "A description is required.";
    // } else if (values.treesCut.length > 10) {
    //     errors.treesCut = "Enter Proper Numbers";
    // }


    return errors;
}