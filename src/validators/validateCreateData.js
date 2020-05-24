export default function validateCreateData(values) {
    let errors = {};

    // treesPlanted Errors
    if (!values.treesPlanted) {
        errors.treesPlanted = "A description is required.";
    } else if (values.treesPlanted.length > 10) {
        errors.treesPlanted = "Enter Proper Numbers";
    }

    // treesSaved Errors
    if (!values.treesSaved) {
        errors.treesSaved = "A description is required.";
    } else if (values.treesSaved.length > 10) {
        errors.treesSaved = "Enter Proper Numbers";
    }

    // treesCut Errors
    if (!values.treesCut) {
        errors.treesCut = "A description is required.";
    } else if (values.treesCut.length > 10) {
        errors.treesCut = "Enter Proper Numbers";
    }

    return errors;
}