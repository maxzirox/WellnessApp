const SnackBar = ({children}) => {
    return(
        <div className="snackbarCustom">
            Alerta!
            {children}
        </div>
    )
}
export default SnackBar