// Immediately Invoked Function Expression


(function chai(){
    console.log("DB Connected")
})();

(
    () => {
        console.log("DB Connected Again")
    }
)();

/* How to add arguments, parameters in this iife function */
(
    (name) => {
        console.log("DB Connected Again, " + name + "!" )
    }
)("Mohit")