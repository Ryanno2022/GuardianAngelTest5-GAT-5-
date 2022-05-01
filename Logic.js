



const Logic = (props) => {
    int rollover = 0.05; // Adjustable rollover
    function calculateRefund(amount, period, rollover) {
        const fee = amount * (period * rollover);
        return fee;
    }
}

export default Logic;