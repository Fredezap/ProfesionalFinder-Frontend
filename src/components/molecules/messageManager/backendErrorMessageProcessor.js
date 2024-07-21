function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const backendErrorMessageProcessor = (err) => {
    console.log("err", err)
    const errors = err ? err : [];
    const genericError = "Ocurrio un error inesperado";
    console.log("errors", errors)
    try {
        if (errors.length === 0) {
            return genericError;
        }

        const formatedErrors = errors.map((error) => {
            console.log(error)
            return capitalizeFirstLetter(
                error.msg.toLowerCase().replace(/_/g, " ")
              );
        });

        console.log(formatedErrors)
        const joinedErrors = formatedErrors.join(', ');

        console.log(joinedErrors)
        return joinedErrors;

    } catch (error) {
        console.log(error)
        return genericError;
    }
};